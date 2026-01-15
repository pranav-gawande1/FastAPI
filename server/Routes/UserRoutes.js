const { completeProfile, DeleteUser, GetAllUsers, UpdateUser,GetUserById, UpdateUserByID } = require('../Controllers/UserController');
const  protect  = require('../Middlewares/Auth.js');
const adminOnly = require('../Middlewares/AdminMiddleware.js');
const express = require("express");

const user_router = express.Router();

user_router.patch('/updateprofile',  protect, completeProfile);
user_router.delete('/user/:id', protect, DeleteUser);
user_router.get('/users', protect, adminOnly, GetAllUsers);
user_router.patch('/user', protect, UpdateUser);
user_router.get('/me',protect , GetUserById);

//////Admin Routes //////
user_router.patch('/admin/user/:id', protect, adminOnly, UpdateUserByID);

module.exports = user_router;