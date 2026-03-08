const express = require("express");
const protect = require("../../Middlewares/Auth.js");
const adminOnly = require("../../Middlewares/AdminMiddleware.js");
const { getOrdersSummry, getDashboardSummary } = require("../../Controllers/AnalyticsController.js");

const analytics_router = express.Router();

analytics_router.get('/ordersummary/', protect, adminOnly, getOrdersSummry);
analytics_router.get('/dashboardsummary/', protect, adminOnly, getDashboardSummary)

module.exports = analytics_router;