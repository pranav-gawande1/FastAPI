const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const PizzaModel = require("../models/Pizza")

const Cart = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    cart_items: [
        {
            pizza: {
                type: Schema.Types.ObjectId,
                ref: "pizzas",
                required: true
            },
            size: {
                type: String,
                enum: [
                    "small",
                    "medium",
                    "large",
                    "extra_large"
                ],
                default: "small",
                // required: true
            },
            quantity: {
                type: Number,
                default: "1",
                // required: true,
                min: 1
            },
        }
    ],
    total_price: {
        type: Number,
        default: 0,
        required: true
    }
})
const CartModel = mongoose.model('cart', Cart)
module.exports = CartModel;