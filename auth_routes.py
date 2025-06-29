from fastapi import APIRouter,status,Depends, UploadFile, File, Form
from typing import Optional
from database import Session,engine
from schemas import SignUpModel,LoginModel
from models import User
from fastapi.exceptions import HTTPException
from werkzeug.security import generate_password_hash,check_password_hash
from fastapi_jwt_auth import AuthJWT
from fastapi.encoders import jsonable_encoder
import shutil
import uuid
import os

auth_router = APIRouter(
    prefix='/auth',
    tags=['auth']
)

session=Session(bind=engine)


@auth_router.get('/')
async def hello(Authorize:AuthJWT=Depends()):
    try:
        Authorize.jwt_required()

    except Exception as e:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail="Invalid Token")

    return {"message": "Hello, Russia!"}


@auth_router.post('/signup'
    ,status_code=status.HTTP_201_CREATED)
async def signup(
    username: str = Form(...),
    name: str = Form(...),
    email: str = Form(...),
    password: str = Form(...),
    is_active: bool = Form(True),
    is_staff: bool = Form(False),
    image: Optional[UploadFile] = File(None)

):
    db_email=session.query(User).filter(User.email==email).first()

    if db_email is not None:
        return HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                             detail="User with email already exists")
                             
    db_username=session.query(User).filter(User.username==username).first()

    if db_username is not None:
        return HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                             detail="User with username already exists")
    
    # Save uploaded image to disk
    upload_dir = "C:/PIZZA_HUT/upload"
    image_path = f"{upload_dir}/{image.filename}"

    with open(image_path, "wb") as buffer:
        buffer.write(await image.read())
    
    new_user = User(
        username=username,
        name=name,
        email=email,
        password=generate_password_hash(password),
        is_active=is_active,
        is_staff=is_staff,
        image=image.filename,
    )

    session.add(new_user)

    session.commit()

    return new_user

# login route

@auth_router.post('/login')
async def login(user:LoginModel,Authorize:AuthJWT=Depends()):
    db_user=session.query(User).filter(User.username==user.username).first()

    if db_user and check_password_hash(db_user.password, user.password):
        access_token=Authorize.create_access_token(subject=db_user.username)
        refresh_token=Authorize.create_refresh_token(subject=db_user.username)

        response={
            "access":access_token,
            "refresh":refresh_token,
            "is_staff": db_user.is_staff 
        }

        return jsonable_encoder(response)
    
    raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST
                        ,detail="Invalid Username or password")



# refreshing token

@auth_router.get('/refresh')
async def refresh_token(Authorize:AuthJWT=Depends()):
    try:
        Authorize.jwt_refresh_token_required()

    except Exception as e:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail="Please provide a valid refresh token")
    
    current_user=Authorize.get_jwt_subject()
    

    access_token=Authorize.create_access_token(subject=current_user)

    return jsonable_encoder({"access":access_token})

# get user by its token
@auth_router.get('/user')
async def get_user_by_token(Authorize: AuthJWT = Depends()):
    try:
        Authorize.jwt_required()
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail="Invalid token")

    current_user = Authorize.get_jwt_subject()

    user = session.query(User).filter(User.username == current_user).first()

    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="User not found")

    response = {
        "id": user.id,
        "name":user.name,
        "username": user.username,
        "email": user.email,
        "is_staff": user.is_staff,
        "is_active": user.is_active,
        "image":user.image
    }

    return jsonable_encoder(response)
