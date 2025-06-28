from fastapi import APIRouter,status,Depends
from fastapi_jwt_auth import AuthJWT
from schemas import PizzaModel
from models import Pizza
# from database import get_db
from fastapi.exceptions import HTTPException
from database import Session,engine
from fastapi.encoders import jsonable_encoder


pizza_router = APIRouter(
    prefix='/pizzas',
    tags=['pizzas']
)

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

# @pizza_router.post("/add", status_code=status.HTTP_201_CREATED)
# def create_pizza(pizza: PizzaModel, db: Depends(get_db)):
#     new_pizza = Pizza(
#         name=pizza.name,
#         description=pizza.description,
#         image_url=pizza.image_url,
#         price=pizza.price
#     )
#     db.add(new_pizza)
#     db.commit()
#     db.refresh(new_pizza)

#     response={
#         "name": new_pizza.name,
#         "description": new_pizza.description,
#         "image_url": new_pizza.image_url,
#         "price": new_pizza.price
#     }

#     return jsonable_encoder(new_pizza)

