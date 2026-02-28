const PizzaModel = require("../models/Pizza");
const UserModel = require("../models/User");
const CartModel = require("../models/Cart");

const AddtoCart = async (req, res) => {
    try {
        const { pizzaId, quantity, size } = req.body;
        // const { items } = req.body;
        if (!pizzaId) {
            return res.status(400).json({ message: "Missing required details." });
        }
        const user = await UserModel.findById(req.user._id).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }
        if (user.role === "admin") {
            return res.status(400).json({ message: "YOu are admin, plz login as a user." });
        }
        const pizza = await PizzaModel.findById(pizzaId);

        if (!pizza) {
            return res.status(404).json({ message: "Pizza not found" });
        }

        let cart = await CartModel.findOne({ user: (req.user._id) });

        if (!cart) {
            cart = new CartModel({
                user: req.user._id,
                cart_items: [],
                total_price: 0
            });
        }

        const existingItem = await cart.cart_items.find(
            (item) => item.pizza.toString() === pizzaId && item.size === size
        );

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.cart_items.push({
                pizza: pizzaId,
                quantity,
                size,
            });
        }

        let total = 0;
        for (let item of cart.cart_items) {
            const pizza = await PizzaModel.findById(item.pizza);

            let price = Number(pizza.price);

            // // Example: assume pizza has price object
            // if (item.size === "small") price = pizzaData.price.small;
            // if (item.size === "medium") price = pizzaData.price.medium;
            // if (item.size === "large") price = pizzaData.price.large;
            // if (item.size === "extra_large") price = pizzaData.price.extra_large;


            total += price * item.quantity;
        }

        cart.total_price = total;
        await cart.save();

        res.status(200).json({
            message: "Item added to cart",
            cart
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Something went wrong!!" });
    }
}

const GetCartByUserId = async (req, res) => {
    try {
        const user = await UserModel.findById(req.user._id).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found!!" });
        }
        const getcart = await CartModel.findOne({ user: user.id });
        // if(!getcart){
        //     res.status()
        // }
        res.status(200).json({ success: true, getcart });
    } catch (err) {
        res.status(500).jsn({ message: err.message });
        console.error(err);
    }
}

const DeleteCartItem = async (req, res) => {
    try {
        const itemId = req.params.id;
        const user = await UserModel.findById(req.user._id).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found!!" });
        }

        let deletedItem = await CartModel.findOneAndUpdate(
            { user: user.id },
            { $pull: { cart_items: { _id: itemId } } },
            { new: true }
        ).populate("cart_items.pizza");

        if (!deletedItem) {
            return res.status(404).json({ message: "Item not found in user's cart." })
        }

        deletedItem.total_price = deletedItem.cart_items.reduce((total, item) => {
            return total += (item.pizza.price * item.quantity);
        }, 0);

        await deletedItem.save();

        res.status(200).json({ success: true, deletedItem })
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err);
    }
}

const ClearCart = async (req, res) => {
    try {
        const user = await UserModel.findById(req.user._id).select("-password");
        if (!user) {
            res.status(404).json({ message: "User not found!!" });
        }
        const clearedCart = await CartModel.findOneAndUpdate(
            { user: user.id },
            { $set: { cart_items: [], total_price: 0 } },
            { new: true }
        )
        if (!clearedCart) {
            res.status(404).json({ message: "Cart is already empty." })
        }
        res.status(200).json({ success: true, message: "Cart cleared successfully", clearedCart })

    } catch (err) {
        res.status(500).json({ message: err.message })
        console.error(err);
    }
}

const UpdateCartItem = async (req, res) => {
    try {
        const itemId = req.params.id;
        const { quantity, size } = req.body;
        const user = await UserModel.findById(req.user._id).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found!!" });
        }

        const cart = await CartModel.findOne({ user: user.id });
        if (!cart) {
            return res.status(404).json({ message: "Cart not found for the user." });
        }
        let updateCartItem = await CartModel.findOneAndUpdate(
            {
                user: user.id,
                "cart_items._id": itemId
            },
            {
                $set: {
                    "cart_items.$.quantity": quantity,
                    "cart_items.$.size": size
                }
            },
            { new: true }
        ).populate("cart_items.pizza");

        if (!updateCartItem) {
            return res.status(404).json({ message: "Item not found in cart" });
        }

        updateCartItem.total_price = updateCartItem.cart_items.reduce((total, item) => {
            return total + (item.pizza.price * item.quantity);
        }, 0);
        await updateCartItem.save();

        res.status(200).json({ success: true, message: "Item updated successfully", updateCartItem });
    } catch (err) {
        res.status(500).json({ message: err.message })
        console.error(err);
    }
}

module.exports = { AddtoCart, GetCartByUserId, DeleteCartItem, ClearCart, UpdateCartItem };