from fastapi import FastAPI
from auth_routes import auth_router
from order_routes import order_router
from pizza_routes import pizza_router
from fastapi_jwt_auth import AuthJWT
from schemas import Settings
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse, FileResponse

app = FastAPI()

@AuthJWT.load_config
def get_config():
    return Settings()

app.include_router(order_router)
app.include_router(auth_router)
app.include_router(pizza_router)

# mount static files
app.mount("/static", StaticFiles(directory="static"), name="static")
app.mount("/upload", StaticFiles(directory="upload"), name="upload")

# API endpoints
@app.get("/auth/login",response_class=HTMLResponse)
async def login():
    return FileResponse("static/login.html")

@app.get("/auth/signup",response_class=HTMLResponse)
async def signup():
    return FileResponse("static/register.html")

@app.get("/", response_class=HTMLResponse)
async def home():  
    return FileResponse("static/landingpage.html")

@app.get("/user/dashboard",response_class=HTMLResponse)
async def dashboard():
    return FileResponse("static/dashboard.html")

@app.get("/admin/dashboard",response_class=HTMLResponse)
async def list_all_users():
    return FileResponse("static/admin.html")

@app.get("/admin/users",response_class=HTMLResponse)
async def list_all_users():
    return FileResponse("static/users.html")

@app.get("/user/order-data",response_class=HTMLResponse)
async def list_all_orders():
    return FileResponse("static/orders.html")

@app.get("/user/profile", response_class=HTMLResponse)
async def get_user_profile():
    return FileResponse("static/profile.html")

@app.get("/admin/profile", response_class=HTMLResponse)
async def get_user_profile():
    return FileResponse("static/profile-admin.html")

@app.get("/user/contact", response_class=HTMLResponse)
async def get_user_profile():
    return FileResponse("static/contact.html")

@app.get("/user/place-order", response_class=HTMLResponse)
async def get_user_profile():
    return FileResponse("static/place-order.html")