from database import Base
from sqlalchemy import Column,Integer,Boolean,Text,String,ForeignKey,Float
from sqlalchemy.orm import relationship
from sqlalchemy_utils.types import ChoiceType  

class User(Base):
    __tablename__='user'
    id=Column(Integer,primary_key=True)
    name = Column(String(100))
    username=Column(String(25),unique=True)
    email=Column(String(80),unique=True)
    password=Column(Text,nullable=True)
    is_staff=Column(Boolean,default=False)
    is_active=Column(Boolean,default=False)
    image = Column(String(200))
    orders=relationship('Order',back_populates='user')


    def __repr__(self):
        return f"<User {self.username}"
    vfv
    vf
    f
    vs

    vs
    v
class Order(Base):
    ORDER_STATUSES=(
        ('PENDING','pending'),
        ('IN-TRANSIT','in-transit'),
        ('DELIVERED','delivered')
    )

    PIZZA_SIZE=(
        ('SMALL','small'),
        ('MEDIUM','medium'),
        ('LARGE','large'),
        ('EXTRA-LARGE','extra-large')
    )

    __tablename__='orders'
    id=Column(Integer,primary_key=True)
    quantity=Column(Integer,nullable=False)
    order_status=Column(ChoiceType(choices=ORDER_STATUSES),default="PENDING")
    pizza_size=Column(ChoiceType(choices=PIZZA_SIZE),default="SMAll")
    user_id=Column(Integer,ForeignKey('user.id'))
    user=relationship('User',back_populates='orders')

    def __repr__(self):
        return f"<order {self.id}"
    
class Pizza(Base):
    __tablename__ = "pizzas"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(200), nullable=False)
    description = Column(String(500))
    image_url = Column(String(200))
    price = Column(Float, nullable=False)