from fastapi import APIRouter,status,Depends, UploadFile, File, Form
from typing import Optional
from fastapi_jwt_auth import AuthJWT
from schemas import PizzaModel
from models import User, Pizza
from fastapi.exceptions import HTTPException
from database import Session,engine

pizza_router = APIRouter(
    prefix='/pizzas',
    tags=['pizzas']
)

session=Session(bind=engine)

# @pizza_router.get('/')
# async def hello(Authorize:AuthJWT=Depends()):

#     try:
#         Authorize.jwt_required()

#     except Exception as e:
#         raise HTTPException(
#             status_code=status.HTTP_401_UNAUTHORIZED,
#             detail="Invalid Token"
#         )
#     return {"message": "Multiplication of 2 and 4 is 8"}

# @pizza_router.post("/add-pizza", status_code=status.HTTP_201_CREATED)
# async def add_pizza(pizza: PizzaModel, Authorize: AuthJWT = Depends()):
#     try:
#         Authorize.jwt_required()
#     except Exception:
#         raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")

#     current_user=Authorize.get_jwt_subject()
#     user=session.query(User).filter(User.username==current_user).first()


#     if not user or not user.is_staff:
#         raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Not authorized to add pizza")

#     new_pizza = Pizza(
#         name=pizza.name,
#         price=pizza.price,
#         description=pizza.description,
#         image_url=pizza.image_url
#     )

#     session.add(new_pizza)
#     session.commit()

#     return {
#         "message": "Pizza added successfully",
#         "pizza": {
#             "id": new_pizza.id,
#             "name": new_pizza.name,
#             "price": new_pizza.price,
#             "description":new_pizza.description,
#             "image":new_pizza.image_url
#         }
#     }

@pizza_router.delete('/pizza/{id}/',status_code=status.HTTP_204_NO_CONTENT)
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
    price: str = Form(...),
    description: str = Form(...),
    image: Optional[UploadFile] = File(None),
     Authorize: AuthJWT = Depends()
):
    try:
        Authorize.jwt_required()
    except Exception:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")

    current_user=Authorize.get_jwt_subject()
    user=session.query(User).filter(User.username==current_user).first()


    if not user or not user.is_staff:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Not authorized to add pizza")
    
    # Save uploaded image to disk
    upload_dir = "C:/PIZZA_HUT/upload"
    image_path = f"{upload_dir}/{image.filename}"

    with open(image_path, "wb") as buffer:
        buffer.write(await image.read())
    
    new_pizza = Pizza(
        name=Pizza.name,
        price=Pizza.price,
        description=Pizza.description,
        image=Pizza.image.filename,
    )

    session.add(new_pizza)

    session.commit()

    return {
        "message": "Pizza added successfully",
        "pizza": {
            "id": new_pizza.id,
            "name": new_pizza.name,
            "price": new_pizza.price,
            "description":new_pizza.description,
            "image":new_pizza.image_url
        }
    }