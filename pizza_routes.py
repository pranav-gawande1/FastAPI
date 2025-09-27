from fastapi import APIRouter,status,Depends, UploadFile, File, Form, Query
from typing import Optional
from database import Session,engine
from fastapi_jwt_auth import AuthJWT
from models import User, Pizza
from fastapi.exceptions import HTTPException
from database import Session,engine
from fastapi.encoders import jsonable_encoder

pizza_router = APIRouter(
    prefix='/pizzas',
    tags=['pizzas']
)

session=Session(bind=engine)

@pizza_router.get('/')
async def hello(Authorize:AuthJWT=Depends()):

    try:
        Authorize.jwt_required()

    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid Token"
        )
    return {"message": "Multiplication of 2 and 4 is 8"}

@pizza_router.delete('/pizza/{id}',status_code=status.HTTP_204_NO_CONTENT)
async def delete_an_pizza(id:int,Authorize:AuthJWT=Depends()):
    try:
        Authorize.jwt_required()

    except Exception as e:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail="Invalid Token")
    
    pizza_to_delete=session.query(Pizza).filter(Pizza.id==id).first()
    
    session.delete(pizza_to_delete)

    session.commit()

    return {pizza_to_delete}

@pizza_router.post('/add-pizza'
    ,status_code=status.HTTP_201_CREATED)
async def add_pizza(
    name: str = Form(...),
    description: str = Form(...),
    image_url: Optional[UploadFile] = File(),
    price: str = Form(...),
    Authorize: AuthJWT = Depends()
):
    try:
        Authorize.jwt_required()
    except Exception:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")

    current_user=Authorize.get_jwt_subject()
    user=session.query(User).filter(User.username==current_user).first()


    if not user or not user.is_staff:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Only admin can add pizzas"
        )
    
    # Save uploaded image to disk
    upload_dir = "C:/Users/hp/OneDrive/Desktop/FastAPI/upload"
    image_path = f"{upload_dir}/{image_url.filename}"

    with open(image_path, "wb") as buffer:
        buffer.write(await image_url.read())
    
    new_pizza = Pizza(
        name=name,
        description=description,
        image_url=image_url.filename,
        price=price
    )

    session.add(new_pizza)

    session.commit()

    return new_pizza

@pizza_router.get('/pizzas')
async def list_all_pizzas(Authorize:AuthJWT=Depends()):
    try:
        Authorize.jwt_required()
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail="Invalid Token"
                            )
    
    current_user=Authorize.get_jwt_subject()

    user=session.query(User).filter(User.username==current_user).first()

    if user.is_staff:
        orders=session.query(Pizza).all()

        return jsonable_encoder(orders)
    
    raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail="You are not a Super User"
                            )

@pizza_router.get("/search")
async def search_pizza_by_name(name: str = Query(...), Authorize: AuthJWT = Depends()):
    try:
        Authorize.jwt_required()
    except Exception:
        raise HTTPException(status_code=401, detail="Invalid Token")

    pizzas = session.query(Pizza).filter(Pizza.name.ilike(f"%{name}%")).all()
    if not pizzas:
        return {"detail": "No matching pizza found"}
    return jsonable_encoder(pizzas)
