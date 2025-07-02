from fastapi import APIRouter,status,Depends,Form
from fastapi_jwt_auth import AuthJWT
from models import User,Order
from fastapi.exceptions import HTTPException
from database import Session,engine
from fastapi.encoders import jsonable_encoder
from schemas import OrderModel, OrderStatusModel

order_router = APIRouter(
    prefix='/orders',
    tags=['orders']
)

session=Session(bind=engine)

@order_router.get('/')
async def hello(Authorize:AuthJWT=Depends()):

    try:
        Authorize.jwt_required()

    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid Token"
        )
    return {"message": "Multiplication of 2 and 4 is 8"}

########################################################
#  User routes to delete, update, place and view order #
########################################################
@order_router.post('/order', status_code=status.HTTP_201_CREATED)
async def place_an_order(
    pizza_size: str = Form(...),
    quantity: int = Form(...),
    Authorize: AuthJWT = Depends()
):
    try:
        Authorize.jwt_required()
    except Exception:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid Token"
        )

    current_user = Authorize.get_jwt_subject()
    user = session.query(User).filter(User.username == current_user).first()

    new_order = Order(
        pizza_size=pizza_size,
        quantity=quantity,
        user=user  # assuming you have a ForeignKey relationship
    )

    session.add(new_order)
    session.commit()

    response = {
        "pizza_size": new_order.pizza_size,
        "quantity": new_order.quantity,
        "id": new_order.id,
        "status": new_order.order_status
    }
    return jsonable_encoder(response)


@order_router.get('/user/orders')
async def get_user_orders(Authorize:AuthJWT=Depends()):
    try:
        Authorize.jwt_required()
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid Token"
        )
    
    user=Authorize.get_jwt_subject()

    current_user=session.query(User).filter(User.username==user).first()

    return jsonable_encoder(current_user.orders)

@order_router.put('/order/update/{id}')
async def update_order(id:int,order:OrderModel,Authorize:AuthJWT=Depends()):
    try:
        Authorize.jwt_required()

    except Exception as e:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail="Invalid Token")
    
    order_to_update=session.query(Order).filter(Order.id==id).first()


    order_to_update.quantity=order.quantity
    order_to_update.pizza_size=order.pizza_size

    session.commit()

    return jsonable_encoder(order_to_update)

@order_router.delete('/order/delete/{id}/',status_code=status.HTTP_204_NO_CONTENT)
async def delete_an_order(id:int,Authorize:AuthJWT=Depends()):

    try:
        Authorize.jwt_required()

    except Exception as e:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail="Invalid Token")


    order_to_delete=session.query(Order).filter(Order.id==id).first()

    session.delete(order_to_delete)

    session.commit()

    return order_to_delete

################################################################
########## Admin routes to view orders of users ################
################################################################
@order_router.get('/orders')
async def list_all_orders(Authorize:AuthJWT=Depends()):
    try:
        Authorize.jwt_required()
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail="Invalid Token"
                            )
    
    current_user=Authorize.get_jwt_subject()

    user=session.query(User).filter(User.username==current_user).first()

    if user.is_staff:
        orders=session.query(Order).all()

        return jsonable_encoder(orders)
    
    raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail="You are not a Super User"
                            )

@order_router.get('/users')
async def list_all_users(Authorize: AuthJWT = Depends()):
    try:
        Authorize.jwt_required()
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail="Invalid Token")

    current_username = Authorize.get_jwt_subject()

    user = session.query(User).filter(User.username == current_username).first()

    if user and user.is_staff:
        users = session.query(User).all()
        user_data = [{
            "id": u.id,
            "name":u.name,
            "username": u.username,
            "email": u.email,
            "is_staff": u.is_staff,
            "is_active":u.is_active,
            "image":u.image
        } for u in users]

        return jsonable_encoder(user_data)

    raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,
                        detail="You are not authorized to view this resource.")

@order_router.get('/orders/{id}')
async def get_order_by_id(id:int,Authorize:AuthJWT=Depends()):
    try:
        Authorize.jwt_required()
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid Token"
        )
    
    user=Authorize.get_jwt_subject()

    current_user=session.query(User).filter(User.username==user).first()

    if current_user.is_staff:
        order=session.query(Order).filter(Order.id==id).first()

        return jsonable_encoder(order)
    
    raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User not allowed to carry out the request"
        )

@order_router.get('/user/orders/{id}')
async def get_specific_order(id:int,Authorize:AuthJWT=Depends()):
    try:
        Authorize.jwt_required()
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid Token"
        )
    

    subject=Authorize.get_jwt_subject()

    current_user=session.query(User).filter(User.username==subject).first()

    orders=current_user.orders

    for o in orders:
        if o.id==id:
            return o
        
    raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                        detail="No order with such id")




