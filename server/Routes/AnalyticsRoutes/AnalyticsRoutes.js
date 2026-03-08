const express = require("express");
const protect = require("../../Middlewares/Auth.js");
const adminOnly = require("../../Middlewares/AdminMiddleware.js");
const { getOrdersSummry } = require("../../Controllers/AnalyticsController.js");

const analytics_router = express.Router();

analytics_router.get('/ordersummary/', protect, adminOnly, getOrdersSummry);

module.exports = analytics_router;