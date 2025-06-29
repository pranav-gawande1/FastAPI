from fastapi import APIRouter,status,Depends
from fastapi_jwt_auth import AuthJWT
from schemas import PizzaModel
from models import User, Pizza
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

@pizza_router.post("/add-pizza", status_code=status.HTTP_201_CREATED)
async def add_pizza(pizza: PizzaModel, Authorize: AuthJWT = Depends()):
    try:
        Authorize.jwt_required()
    except Exception:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")

    current_user = Authorize.get_jwt_subject()
    user = session.query(User).filter(User.username == current_user).first()

    if not user or not user.is_staff:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Not authorized to add pizza")

    new_pizza = Pizza(
        name=pizza.name,
        description=pizza.description,
        price=pizza.price,
        image=pizza.image
    )

    session.add(new_pizza)
    session.commit()

    return {
        "message": "Pizza added successfully",
        "pizza": {
            "id": new_pizza.id,
            "name": new_pizza.name,
            "price": new_pizza.price
        }
    }