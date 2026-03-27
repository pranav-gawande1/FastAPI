// const askAI = require("../services/AI/guestAIservice");
const Pizza = require("../models/Pizza");
const adminAIService = require("../services/AI/adminAIService");
const guestAIService = require("../services/AI/guestAIservice");
const userAIService = require("../services/AI/userAIService");

const userchatHandler = async (req, res) => {
    const { message } = req.body;

    const pizzas = await Pizza.find();

    let reply;

    if (!req.user) {
        reply = await guestAIService(message, pizzas);
    } else if (req.user.role === "admin") {
        const analytics = {
            totalOrders: 128,
            totalRevenue: 35600,

            topSellingPizzas: [
                { name: "Farmhouse", orders: 35 },
                { name: "Margherita", orders: 28 },
                { name: "Peppy Paneer", orders: 22 }
            ],

            lowSellingPizzas: [
                { name: "Veg Extravaganza", orders: 5 },
                { name: "Deluxe Veggie", orders: 3 }
            ],

            categoryBreakdown: {
                veg: 90,
                nonVeg: 38
            },

            averageOrderValue: 278,

            recentOrders: [
                { pizza: "Farmhouse", price: 249 },
                { pizza: "Peppy Paneer", price: 299 },
                { pizza: "Margherita", price: 199 }
            ]
        };

        reply = await adminAIService(message, pizzas, analytics);
    } else if (req.user.role === "user") {
        reply = await userAIService(message, pizzas);
    }

    res.json({ reply });
};

module.exports = { userchatHandler };