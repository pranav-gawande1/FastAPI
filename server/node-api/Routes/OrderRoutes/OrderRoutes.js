const express = require("express");
const { PlaceOrder, GetAllOrder, GetOrderById, UpdateOrderStatus, CancelOrderUser, CancelOrderAdmin, GetOrdersUserWise, UpdateOrderByUser } = require("../../Controllers/OrderController.js")
const protect = require("../../Middlewares/Auth.js");
const adminOnly = require("../../Middlewares/AdminMiddleware.js");

const order_router = express.Router();

order_router.post("/orders", protect, PlaceOrder);
order_router.get("/orders", protect, adminOnly, GetAllOrder);
order_router.get("/order/:id", protect, GetOrderById);
order_router.patch("/order/:id/status", protect, adminOnly, UpdateOrderStatus);
order_router.patch("/order/:id/cancel", protect, CancelOrderUser);
order_router.patch("/admin/order/:id/cancel", protect, adminOnly, CancelOrderAdmin);
order_router.get("/myorders", protect, GetOrdersUserWise);
order_router.patch("/order/:id", protect, UpdateOrderByUser);

module.exports = order_router;