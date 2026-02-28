const { AddtoCart, GetCartByUserId, DeleteCartItem, ClearCart, UpdateCartItem } = require('../../Controllers/CartController.js')
const protect = require('../../Middlewares/Auth.js');
const adminOnly = require('../../Middlewares/AdminMiddleware.js')
const express = require('express');

const cart_router = express.Router();

cart_router.post('/cart', protect, AddtoCart);
cart_router.get('/cart', protect, GetCartByUserId);
cart_router.patch('/cart/:id', protect, DeleteCartItem);
cart_router.patch('/cart', protect, ClearCart);
cart_router.patch('/updatecart/:id', protect, UpdateCartItem );

module.exports = cart_router;