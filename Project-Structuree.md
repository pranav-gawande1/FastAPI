---
---
## 📁 Project Structure

```
📦client
 ┣ 📂dist
 ┣ 📂node_modules
 ┣ 📂public
 ┃ ┣ 📜image.svg
 ┃ ┗ 📜vite.svg
 ┣ 📂src
 ┃ ┣ 📂app
 ┃ ┃ ┣ 📜Appinitializer.jsx
 ┃ ┃ ┗ 📜store.js
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📜delivery.png
 ┃ ┃ ┣ 📜freshlybaked.png
 ┃ ┃ ┣ 📜hero.png
 ┃ ┃ ┣ 📜image.png
 ┃ ┃ ┣ 📜ingredients.png
 ┃ ┃ ┣ 📜Margherita_Pizza.jpg
 ┃ ┃ ┣ 📜Pepperoni_Pizza.jpeg
 ┃ ┃ ┣ 📜profile_icon.jpeg
 ┃ ┃ ┣ 📜texture.jpeg
 ┃ ┃ ┗ 📜Veggie_Delight.png
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂About
 ┃ ┃ ┃ ┗ 📜AboutComponent.jsx
 ┃ ┃ ┣ 📂Admin
 ┃ ┃ ┃ ┣ 📂Analytic_Dashborad
 ┃ ┃ ┃ ┃ ┣ 📂charts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜category.jsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜customers.jsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜growth.jsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜orders.jsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜revenue.jsx
 ┃ ┃ ┃ ┃ ┣ 📂Tables
 ┃ ┃ ┃ ┃ ┃ ┣ 📜cutomers.jsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜orders.jsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜products.jsx
 ┃ ┃ ┃ ┃ ┗ 📜DashBoardSummary.jsx
 ┃ ┃ ┃ ┣ 📂Orders
 ┃ ┃ ┃ ┃ ┣ 📜OrderFilter.jsx
 ┃ ┃ ┃ ┃ ┣ 📜OrderStatusModal.jsx
 ┃ ┃ ┃ ┃ ┣ 📜OrderSummary.jsx
 ┃ ┃ ┃ ┃ ┗ 📜OrderTable.jsx
 ┃ ┃ ┃ ┣ 📂SideBar
 ┃ ┃ ┃ ┃ ┣ 📜SideBar.jsx
 ┃ ┃ ┃ ┃ ┗ 📜sideBarToggle.jsx
 ┃ ┃ ┃ ┣ 📜PizzaAddModal.jsx
 ┃ ┃ ┃ ┣ 📜PizzaCardAdmin.jsx
 ┃ ┃ ┃ ┣ 📜PizzaTable.jsx
 ┃ ┃ ┃ ┣ 📜PizzaUpdateModal.jsx
 ┃ ┃ ┃ ┣ 📜UserCard.jsx
 ┃ ┃ ┃ ┣ 📜UserTable.jsx
 ┃ ┃ ┃ ┗ 📜UserUpdateModal.jsx
 ┃ ┃ ┣ 📂Auth
 ┃ ┃ ┃ ┣ 📂CompleteProfile
 ┃ ┃ ┃ ┃ ┗ 📜CompleteProfile.jsx
 ┃ ┃ ┃ ┣ 📂Login
 ┃ ┃ ┃ ┃ ┗ 📜login.jsx
 ┃ ┃ ┃ ┗ 📂Register
 ┃ ┃ ┃ ┃ ┗ 📜Register.jsx
 ┃ ┃ ┣ 📂Cart
 ┃ ┃ ┃ ┣ 📜cart.jsx
 ┃ ┃ ┃ ┗ 📜coupon.jsx
 ┃ ┃ ┣ 📂chatAiAssistant
 ┃ ┃ ┃ ┣ 📜ChatInput.jsx
 ┃ ┃ ┃ ┣ 📜ChatMessage.jsx
 ┃ ┃ ┃ ┗ 📜ChatWidget.jsx
 ┃ ┃ ┣ 📂Landing
 ┃ ┃ ┃ ┣ 📜About.jsx
 ┃ ┃ ┃ ┣ 📜Banner.jsx
 ┃ ┃ ┃ ┣ 📜Contact.jsx
 ┃ ┃ ┃ ┣ 📜Footer.jsx
 ┃ ┃ ┃ ┣ 📜Hero.jsx
 ┃ ┃ ┃ ┗ 📜Menu.jsx
 ┃ ┃ ┣ 📂Loader
 ┃ ┃ ┃ ┣ 📜Loader.jsx
 ┃ ┃ ┃ ┗ 📜NotFound.jsx
 ┃ ┃ ┣ 📂Modal
 ┃ ┃ ┃ ┗ 📜Modal.jsx
 ┃ ┃ ┣ 📂Navbar
 ┃ ┃ ┃ ┗ 📜Navbar.jsx
 ┃ ┃ ┣ 📂Payment
 ┃ ┃ ┃ ┣ 📜OrderSummary.jsx
 ┃ ┃ ┃ ┗ 📜PriceBreakDown.jsx
 ┃ ┃ ┣ 📂Policy
 ┃ ┃ ┃ ┗ 📜PolicyComponent.jsx
 ┃ ┃ ┣ 📂Products
 ┃ ┃ ┃ ┣ 📜PizzaCard.jsx
 ┃ ┃ ┃ ┣ 📜PizzaInfo.jsx
 ┃ ┃ ┃ ┗ 📜PizzaList.jsx
 ┃ ┃ ┣ 📂Profile
 ┃ ┃ ┃ ┣ 📜AddressInfo.jsx
 ┃ ┃ ┃ ┣ 📜PersonalInfo.jsx
 ┃ ┃ ┃ ┣ 📜ProfileAvtar.jsx
 ┃ ┃ ┃ ┣ 📜ProfileCard.jsx
 ┃ ┃ ┃ ┣ 📜ProfileMenu.jsx
 ┃ ┃ ┃ ┗ 📜ProfileUpdateCard.jsx
 ┃ ┃ ┣ 📂User
 ┃ ┃ ┃ ┣ 📜OrderCard.jsx
 ┃ ┃ ┃ ┣ 📜OrdersTable.jsx
 ┃ ┃ ┃ ┗ 📜OrderUpdateModal.jsx
 ┃ ┃ ┗ 📜ToolTip.jsx
 ┃ ┣ 📂constant
 ┃ ┃ ┣ 📜analyticsData.js
 ┃ ┃ ┣ 📜cartData.js
 ┃ ┃ ┣ 📜coupon.js
 ┃ ┃ ┣ 📜items.js
 ┃ ┃ ┣ 📜mockData.js
 ┃ ┃ ┣ 📜OrderData.js
 ┃ ┃ ┣ 📜userData.js
 ┃ ┃ ┗ 📜userInfo.js
 ┃ ┣ 📂context
 ┃ ┃ ┗ 📜PizzaCart.jsx
 ┃ ┣ 📂features
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┗ 📜authSlice.js
 ┃ ┃ ┣ 📂Cart
 ┃ ┃ ┃ ┗ 📜cartSlice.js
 ┃ ┃ ┗ 📂user
 ┃ ┃ ┃ ┗ 📜profileSlice.js
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂About
 ┃ ┃ ┃ ┗ 📜About.jsx
 ┃ ┃ ┣ 📂Admin
 ┃ ┃ ┃ ┣ 📂Analytics
 ┃ ┃ ┃ ┃ ┣ 📜home.jsx
 ┃ ┃ ┃ ┃ ┗ 📜main.jsx
 ┃ ┃ ┃ ┣ 📂Managa_pizzas
 ┃ ┃ ┃ ┃ ┗ 📜Managepizzas.jsx
 ┃ ┃ ┃ ┣ 📂Orders
 ┃ ┃ ┃ ┃ ┗ 📜Orders.jsx
 ┃ ┃ ┃ ┗ 📂Users
 ┃ ┃ ┃ ┃ ┗ 📜Users.jsx
 ┃ ┃ ┣ 📂AIchat
 ┃ ┃ ┃ ┗ 📜AiChat.jsx
 ┃ ┃ ┣ 📂Home
 ┃ ┃ ┃ ┣ 📜AdminHome.jsx
 ┃ ┃ ┃ ┗ 📜Home.jsx
 ┃ ┃ ┣ 📂LandingPage
 ┃ ┃ ┃ ┗ 📜LandingPage.jsx
 ┃ ┃ ┣ 📂Payment
 ┃ ┃ ┃ ┣ 📜ConfirmOrder.jsx
 ┃ ┃ ┃ ┣ 📜PaymentSuccess.jsx
 ┃ ┃ ┃ ┗ 📜PlaceOrder.jsx
 ┃ ┃ ┣ 📂Policies
 ┃ ┃ ┃ ┗ 📜Policy.jsx
 ┃ ┃ ┣ 📂Product
 ┃ ┃ ┃ ┗ 📜Pizza.jsx
 ┃ ┃ ┣ 📂Profile
 ┃ ┃ ┃ ┣ 📜Favourite.jsx
 ┃ ┃ ┃ ┣ 📜Notifications.jsx
 ┃ ┃ ┃ ┣ 📜Profile.jsx
 ┃ ┃ ┃ ┣ 📜ProfileUpdatePage.jsx
 ┃ ┃ ┃ ┣ 📜Security.jsx
 ┃ ┃ ┃ ┣ 📜Seetings.jsx
 ┃ ┃ ┃ ┗ 📜Support.jsx
 ┃ ┃ ┣ 📂User
 ┃ ┃ ┃ ┣ 📜Cart.jsx
 ┃ ┃ ┃ ┗ 📜Orders.jsx
 ┃ ┃ ┗ 📜ProtectedPage.jsx
 ┃ ┣ 📂services
 ┃ ┃ ┗ 📜api.js
 ┃ ┣ 📂shared
 ┃ ┃ ┣ 📂hooks
 ┃ ┃ ┃ ┣ 📜useFetch.jsx
 ┃ ┃ ┃ ┗ 📜useManualFetch.jsx
 ┃ ┃ ┣ 📂slices
 ┃ ┃ ┃ ┗ 📜sharedslice.js
 ┃ ┃ ┗ 📂utils
 ┃ ┃ ┃ ┗ 📜stateUpdater.js
 ┃ ┣ 📜App.css
 ┃ ┣ 📜App.jsx
 ┃ ┣ 📜index.css
 ┃ ┗ 📜main.jsx


📦server
 ┣ 📂node-api
 ┃ ┣ 📂Config
 ┃ ┃ ┗ 📜cloudinary.js
 ┃ ┣ 📂Controllers
 ┃ ┃ ┣ 📜AIchatcontroller.js
 ┃ ┃ ┣ 📜AnalyticsController.js
 ┃ ┃ ┣ 📜AuthController.js
 ┃ ┃ ┣ 📜CartController.js
 ┃ ┃ ┣ 📜OrderController.js
 ┃ ┃ ┣ 📜PizzaController.js
 ┃ ┃ ┗ 📜UserController.js
 ┃ ┣ 📂Middlewares
 ┃ ┃ ┣ 📜AdminMiddleware.js
 ┃ ┃ ┣ 📜aiAuth.js
 ┃ ┃ ┣ 📜Auth.js
 ┃ ┃ ┣ 📜AuthValidation.js
 ┃ ┃ ┗ 📜Upload.js
 ┃ ┣ 📂models
 ┃ ┃ ┣ 📜Cart.js
 ┃ ┃ ┣ 📜db.js
 ┃ ┃ ┣ 📜Order.js
 ┃ ┃ ┣ 📜Pizza.js
 ┃ ┃ ┗ 📜User.js
 ┃ ┣ 📂node_modules
 ┃ ┣ 📂Routes
 ┃ ┃ ┣ 📂AiRoutes
 ┃ ┃ ┃ ┗ 📜aiRoutes.js
 ┃ ┃ ┣ 📂AnalyticsRoutes
 ┃ ┃ ┃ ┗ 📜AnalyticsRoutes.js
 ┃ ┃ ┣ 📂AuthRoutes
 ┃ ┃ ┃ ┗ 📜AuthRouter.js
 ┃ ┃ ┣ 📂CartRoutes
 ┃ ┃ ┃ ┗ 📜CartRoutes.js
 ┃ ┃ ┣ 📂OrderRoutes
 ┃ ┃ ┃ ┗ 📜OrderRoutes.js
 ┃ ┃ ┣ 📂PizzaRoutes
 ┃ ┃ ┃ ┗ 📜PizzaRoutes.js
 ┃ ┃ ┗ 📜UserRoutes.js
 ┃ ┣ 📂services
 ┃ ┃ ┣ 📂AI
 ┃ ┃ ┃ ┣ 📜adminAIService.js
 ┃ ┃ ┃ ┣ 📜aiClient.js
 ┃ ┃ ┃ ┣ 📜guestAIservice.js
 ┃ ┃ ┃ ┗ 📜userAIService.js
 ┃ ┃ ┣ 📂Auth
 ┃ ┃ ┗ 📂RAG
 ┃ ┃ ┃ ┣ 📜embedData.js
 ┃ ┃ ┃ ┣ 📜initData.js
 ┃ ┃ ┃ ┣ 📜retriever.js
 ┃ ┃ ┃ ┗ 📜vectorStore.js
 ┃ ┣ 📜.dockerignore
 ┃ ┣ 📜.env
 ┃ ┣ 📜Dockerfile
 ┃ ┣ 📜package-lock.json
 ┃ ┣ 📜package.json
 ┃ ┗ 📜server.js
 ┣ 📂python-api
 ┃ ┣ 📂data
 ┃ ┣ 📂Services
 ┃ ┃ ┣ 📂__pycache__
 ┃ ┃ ┃ ┣ 📜init_data.cpython-312.pyc
 ┃ ┃ ┃ ┣ 📜rag_service.cpython-312.pyc
 ┃ ┃ ┃ ┗ 📜vectorstore.cpython-312.pyc
 ┃ ┃ ┣ 📜init_data.py
 ┃ ┃ ┣ 📜rag_service.py
 ┃ ┃ ┗ 📜vectorstore.py
 ┃ ┣ 📂__pycache__
 ┃ ┃ ┗ 📜main.cpython-312.pyc
 ┃ ┣ 📜main.py
 ┃ ┗ 📜requirements.txt
 ┣ 📜server.md
 ┣ 📜docker-compose.yaml   
 ┗ 📜.gitignore
```
---