const express = require("express");
const { AddPizza } = require("../../Controllers/PizzaController.js");
const upload = require("../../Middlewares/Upload.js");
const protect = require("../../Middlewares/Auth.js");
const adminOnly = require("../../Middlewares/AdminMiddleware.js");

const pizza_router = express.Router();

pizza_router.post("/addpizza", protect, adminOnly, upload.single("image"), AddPizza);

module.exports = pizza_router;