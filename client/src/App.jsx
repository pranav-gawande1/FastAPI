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
import Manage from './pages/Admin/Managa_pizzas/Manage_pizzas.jsx'
import Orders from './pages/Admin/Orders/Orders.jsx'
import Profile from './pages/Profile/Profile.jsx'
import Pizza from './pages/Product/Pizza.jsx';
import pizza from './constant/mockData.js';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path='/account/login' element={<Login />}></Route>
        <Route path='/account/register' element={<Register />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/' element={<Landing />}></Route>

        {/* Landing Page Routes */}
        <Route path='/about' element={<About />}></Route>
        <Route path='/pizzaparadise/policies' element={<Policy />}></Route>

        {/* Admin routes */}
        <Route path='/users' element={<Users />}> </Route>
        <Route path='/admin/pizzas' element={<Manage />} ></Route>
        <Route path='/orders' element={<Orders />}></Route>

        {/* User Routes */}
        <Route path='/profile' element={<Profile />}></Route>

        {/* Product routes */}
        <Route path='/pizza/:id' element={<Pizza />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
