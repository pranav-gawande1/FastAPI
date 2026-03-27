const express = require("express");
const protect = require("../../Middlewares/Auth.js");
const adminOnly = require("../../Middlewares/AdminMiddleware.js");
const { getOrdersSummry, getDashboardSummary, getSalesCategoryWise, getrevenueAnalytics, getcustomergrowthanalytics } = require("../../Controllers/AnalyticsController.js");

const analytics_router = express.Router();

analytics_router.get('/ordersummary/', protect, adminOnly, getOrdersSummry);
analytics_router.get('/dashboardsummary/', protect, adminOnly, getDashboardSummary);
analytics_router.get('/getcategorywisesell/', protect, adminOnly, getSalesCategoryWise);
analytics_router.get('/getrevenueanalytics/' ,protect, adminOnly, getrevenueAnalytics);
analytics_router.get('/getcustomergrowthanalytics/', protect, adminOnly, getcustomergrowthanalytics);

module.exports = analytics_router;