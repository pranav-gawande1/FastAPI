const { valid } = require("joi");
const OrderModel = require("../models/Order");
const Pizza = require("../models/Pizza");
const UserModel = require("../models/User.js");

const PlaceOrder = async (req, res) => {
    try {
        const { items } = req.body;

        if (!items || items.length === 0) {
            return res.status(400).json({ message: "Cart is empty" });
        }

        const user = await UserModel.findById(req.user._id).select("-password");
        if (user.role === "admin") {
            return res.status(400).json({ message: "You are Admin" });
        }
        console.log("USer is: ", user.id);

        let total_price = 0;
        const orderItems = [];
        for (const item of items) {
            const pizza = await Pizza.findById(item.pizzaId);
            if (!pizza) {
                return res.status(404).json({ message: "Pizza not found" })
            }
            const price = Number(pizza.price);

            total_price += price * item.quantity;

            orderItems.push({
                pizza: pizza._id,
                quantity: item.quantity,
                size: item.size,
            });
        }


        console.log("User id before is:", user._id)
        const order = await OrderModel.create({
            user: req.user._id,
            items: orderItems,
            total_price,
            order_status: "pending"
        })

        res.status(201).json({ success: true, message: "Order placed successfully", order })
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.error(err);
    }
};

const GetOrderById = async (req, res) => {
    try {
        const orderId = req.params.id;

        const getOrder = await OrderModel.findById(orderId).populate("items.pizza");

        res.status(200).json({ success: true, getOrder });
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.error(err);
    }
};

const GetAllOrder = async (req, res) => {
    try {
        const GetAllOrders = await OrderModel.find()
            .populate("user", "name")
            .populate("items.pizza", "name");
        res.status(200).json({ success: true, GetAllOrders });
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.error(err);
    }
}

const UpdateOrderStatus = async (req, res) => {
    try {
        const orderId = req.params.id;

        const { new_status } = req.body;

        const order = await OrderModel.findById(orderId);
        if (!order) {
            return res.status(404).json({ success: false, message: "Order not found" });
        }

        const validTransitions = {
            pending: ["confirmed"],
            confirmed: ["preparing"],
            preparing: ["ready"],
            ready: ["completed"]
        }

        if (!validTransitions[order.order_status]?.includes(new_status)) {
            return res.status(400).json({ message: `Invalid transition state from ${order.order_status} to ${new_status}` })
        }

        const updatedOrder = await OrderModel.findOneAndUpdate(
            {
                _id: orderId,
                order_status: { $ne: "completed" },
            },
            {
                order_status: new_status,
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedOrder) {
            return res.status(404).json({ success: false, message: "Order is already completed or may be internal server error.", updatedOrder });
        }

        res.status(200).json({ success: true, message: "Order status updated successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.error(err);
    }
};

const CancelOrderUser = async (req, res) => {
    try {
        const orderId = req.params.id;

        const user = await UserModel.findById(req.user.id).select("-password");
        const order = await OrderModel.findById(orderId);
        if (!order) {
            return res.status(404).json({ success: false, message: "Order not found" });
        }
        console.log("order.order_status", order.order_status);

        if (order.order_status === "preparing" ||
            order.order_status === "completed" ||
            order.order_status === "ready"
        ) {
            return res.status(400).json({ message: `Order cannot be cancelled at this stage` })
        }

        if (order.order_status === "cancelled_by_user"
        ) {
            return res.status(400).json({ message: `Order is already cancelled.` })
        }

        const cancelOrder = await OrderModel.findByIdAndUpdate(
            orderId,
            {
                order_status: "cancelled_by_user"
            }
        );

        if (!cancelOrder) {
            res.status(404).json({ success: false, message: "Order not found!" });
        }

        res.status(200).json({ success: true, message: `Order cancelled successfully by user ${user.name} at stage ${order.order_status}` })
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err);
    }
};

const CancelOrderAdmin = async (req, res) => {
    try {
        const orderId = req.params.id;

        const order = await OrderModel.findById(orderId);
        if (!order) {
            return res.status(404).json({ success: false, message: "Order not found" });
        }
        // console.log("order.order_status", order.order_status);

        if (order.order_status === "completed") {
            return res.status(400).json({ message: `Completed orders cannot be cancelled.` })
        }

        const cancelOrder = await OrderModel.findByIdAndUpdate(
            orderId,
            {
                order_status: "cancelled_by_admin"
            }
        );

        if (!cancelOrder) {
            res.status(404).json({ success: false, message: "Order not found!" });
        }

        res.status(200).json({ success: true, message: "Order cancelled successfully by Admin due to internal issues." })
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err);
    }
};

const GetOrdersUserWise = async (req, res) => {
    try {
        const user = await UserModel.findById(req.user._id).select("-password");
        if (user.role === "admin") {
            return res.status(400).json({ message: "You are Admin" });
        }

        const AllOrderoFUser = await OrderModel.find({ user: req.user._id })
            .populate("items.pizza");
        if (!AllOrderoFUser || AllOrderoFUser.length === 0) {
            return res.status(200).json({ message: `No order found for user ${user.name}`, success: true, AllOrderoFUser });
        }

        res.status(200).json({ success: true, AllOrderoFUser });
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err);
    }
};

const UpdateOrderByUser = async (req, res) => {
    try {
        const { pizzaId, quantity, size } = req.body;

        const orderId = req.params.id;

        const order = await OrderModel.findOne({ _id: orderId, user: req.user.id });
        if (!order) {
            return res.status(404).json({ success: false, message: "Order not found for this user." });
        }

        if (order.order_status !== "pending") {
            return res.status(400).json({ message: "Order cannot be updated now" });
        }
        const updateData = {};

        if (pizzaId) {
            const pizza = await Pizza.findById(pizzaId);
            if (!pizza) return res.status(404).json({ message: "Pizza not available!" });

            const price = Number(
                String(pizza.price).replace(/[^0-9.]/g, "")
            );
            updateData.pizza = pizzaId;

            const qty = quantity || order.quantity;
            updateData.total_price = price * qty;
        }

        if (quantity) {
            updateData.quantity = quantity;

            if (!updateData.total_price) {
                const pizza = await Pizza.findById(order.pizza);
                const price = Number(
                    String(pizza.price).replace(/[^0-9.]/g, "")
                );
                updateData.total_price = price * quantity;
            }
        }

        if (size) updateData.size = size;


        const UpdatedOrderOfUser = await OrderModel.findOneAndUpdate(
            {
                _id: orderId,
                user: req.user.id,
            },
            updateData,
            {
                new: true,
                runValidators: true
            }
        );
        if (!UpdatedOrderOfUser) {
            return res.status(404).json({ message: `No order found for user` });
        }

        res.status(200).json({ success: true, order: UpdatedOrderOfUser });
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err);
    }
};

module.exports = { PlaceOrder, GetOrderById, GetAllOrder, UpdateOrderStatus, CancelOrderUser, CancelOrderAdmin, GetOrdersUserWise, UpdateOrderByUser };