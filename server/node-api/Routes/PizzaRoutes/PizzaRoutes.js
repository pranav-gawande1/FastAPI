const express = require("express");
const { AddPizza, UpdatePizza, GetAllPizzas, GetPizzaById, DeletePizza } = require("../../Controllers/PizzaController.js");
const upload = require("../../Middlewares/Upload.js");
const protect = require("../../Middlewares/Auth.js");
const adminOnly = require("../../Middlewares/AdminMiddleware.js");
const auth = require("../../Middlewares/Auth.js")

const pizza_router = express.Router();

pizza_router.post("/pizza", protect, adminOnly, upload.single("image"), AddPizza);
pizza_router.patch("/pizza/:id", protect, adminOnly, upload.single("image"), UpdatePizza);
pizza_router.get("/pizzas", protect , auth, GetAllPizzas);
pizza_router.get("/pizza/:id", protect, auth, GetPizzaById);
pizza_router.delete("/pizza/:id", protect, adminOnly, DeletePizza);

module.exports = pizza_router;