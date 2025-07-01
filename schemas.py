from pydantic import BaseModel
from sqlalchemy.orm import relationship
from typing import Optional


class SignUpModel(BaseModel):
    id:Optional[int]
    username:str
    name:str
    email:str
    password:str
    is_staff:Optional[bool]
    is_active:Optional[bool]
    image:Optional[str] = None


    class Config:
        from_attributes=True
        json_schema_extra={
            'example':{
                "username":"pranbot",
                "name":"Pranav Gawande",
                "email":"pjgawande1966@gmail.com",
                "password":"password",
                "is_staff":False,
                "is_active":True,
                "image":"/uploads/profile.jpg"
            }
        }


class Settings(BaseModel):
    authjwt_secret_key:str='879c4f426b7065b2b4ded920b9582a4fef98458f35a73023594ba94e031fdc7f'


class LoginModel(BaseModel):
    username:str
    password:str

class OrderModel(BaseModel):
    id:Optional[int]
    quantity:int
    order_status:Optional[str]="PENDING"
    pizza_size:Optional[str]="SMALL"
    user_id:Optional[int]

    class Config:
        from_attributes=True
        json_schema_extra={
            'example':{
                "quantity":2,
                "pizza_size":"LARGE"
            }
        }

class PizzaModel(BaseModel):
    name: str
    price: str
    description: str
    image_url: str



class OrderStatusModel(BaseModel):
    order_status:Optional[str]="PENDING"

    class Config:
        orm_mode=True
        schema_extra={
            "example":{
                "order_status":"PENDING"
            }
        }