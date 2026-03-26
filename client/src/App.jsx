import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Auth/Login/login.jsx'
import Register from './components/Auth/Register/Register.jsx'
import Home from './pages/Home/Home.jsx'
import Landing from './pages/LandingPage/LandingPage.jsx'
import About from './pages/About/About.jsx'
import Policy from './pages/Policies/Policy.jsx'
import Users from './pages/Admin/Users/Users.jsx'
import ManagePizza from './pages/Admin/Managa_pizzas/Managepizzas.jsx'
import Orders from './pages/Admin/Orders/Orders.jsx'
import UserOrders from './pages/User/Orders.jsx'
import Profile from './pages/Profile/Profile.jsx'
import Pizza from './pages/Product/Pizza.jsx';
import ProtectedPage from './pages/ProtectedPage.jsx'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import CompleteProfile from './components/Auth/CompleteProfile/CompleteProfile.jsx'
import ProfileUpdatePage from './pages/Profile/ProfileUpdatePage.jsx'
import ConfirmOrder from './pages/Payment/ConfirmOrder.jsx'
import PlaceOrder from './pages/Payment/PlaceOrder.jsx'
import PaymentSuccess from './pages/Payment/PaymentSuccess.jsx'
import CartPage from './pages/User/Cart.jsx'
import Favorites from './pages/Profile/Favourite.jsx'
import Notifications from './pages/Profile/Notifications.jsx'
import Security from './pages/Profile/Security.jsx'
import Settings from './pages/Profile/Seetings.jsx'
import Support from './pages/Profile/Support.jsx'
import AnalyticsHome from './pages/Admin/Analytics/home.jsx'
import Main from './pages/Admin/Analytics/main.jsx'
import AdminHome from './pages/Home/AdminHome.jsx'
import AIAssistantPage from './pages/AIchat/aichat.jsx'
import ChatWidget from './components/chatAiAssistant/ChatWidget.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Auth Routes */}
          <Route path='/account/login' element={<Login />}></Route>
          <Route path='/account/register' element={<Register />}></Route>
          <Route element={<ProtectedPage />}>
            <Route path='/home' element={

              <Home />

            }></Route>
          </Route>

          {/* Landing Page Routes */}
          <Route path='/' element={<Landing />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/pizzaparadise/policies' element={<Policy />}></Route>

          {/* Admin routes */}
          <Route element={<ProtectedPage adminOnly={true} />}>
            <Route path='/users' element={<Users />}> </Route>
            <Route path='/admin/pizzas' element={<ManagePizza />} ></Route>
            <Route path='/admin/orders' element={<Orders />}></Route>
            <Route path='/admin/analytics' element={<AnalyticsHome />}></Route>
            <Route path='/admin/analytics/table' element={<Main />}></Route>
            <Route path='/admin-home' element={<AdminHome />}></Route>
          </Route>

          {/* User Routes */}
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/orders' element={<UserOrders />}></Route>
          <Route path='/cart' element={<CartPage />}></Route>
          {/*profile edit route */}
          <Route path="/me/update/profile" element={<ProfileUpdatePage />}></Route>
          {/* Profile section routes */}
          <Route path="/me/favourites" element={<Favorites />}></Route>
          <Route path="/me/notifications" element={<Notifications />}></Route>
          <Route path='/me/security' element={<Security />}></Route>
          <Route path='/me/settings' element={<Settings />}></Route>
          <Route path='/me/support' element={<Support />}></Route>

          {/* Product routes */}
          <Route path='/pizza/:id' element={<Pizza />}></Route>

          {/* Complete Profile on Signup */}
          {/* <Route element={<ProtectedPage />}> */}
          <Route path='/complete-profile' element={<CompleteProfile />} ></Route>
          {/* </Route> */}

          {/* Payment routes */}
          <Route element={<ProtectedPage />}>
            <Route
              path='/confirm-order' element={
                <ConfirmOrder />
              }
            >
            </Route>
            <Route path='/place-order/:id'
              element={<PlaceOrder />}
            ></Route>

            <Route path='/payment-success/:id'
              element={<PaymentSuccess />}
            ></Route>
          </Route>


          {/* ai assistant routes */}
          <Route path='/ai-chat' element={<AIAssistantPage />} ></Route>
        </Routes>
        {/*chatwidget */}
        <ChatWidget />
      </BrowserRouter >


      <ToastContainer
        position="top-right"
        autoclose={3000}
        hidePogressBar={false}
        closeOnClick
        pauseOnHover
        draggle
        toastClassname="bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg shadow-lg"
        bodyClassName="text-sm"
      />
    </>
  )
}
export default App
