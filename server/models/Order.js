const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: "UserModel",
    //     required: true
    // },
    items: [
        {
            pizza: {
                type: Schema.Types.ObjectId,
                ref: "Pizza",
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
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                min: 1
            },
        }
    ],
    order_status: {
        type: String,
        required: true,
        enum: [
            "pending",
            "confirmed",
            "preparing",
            "ready",
            "completed",
            "cancelled_by_user",
            "cancelled_by_admin"
        ],
        default: "pending"
    },
    total_price: {
        type: Number,
        default: 0,
        required: true
    }

}, { timestamps: true })

const OrderModel = mongoose.model('orders', OrderSchema)
module.exports = OrderModel;