const Pizza = require("../models/Pizza");

const AddPizza = async (req, res) => {
    try {
        const { name, description, price } = req.body;

        if (!name || !description || !price || !req.file) {
            return res.status(400).json({ message: "All Field are required! " });
        }

        const pizza = await Pizza.create({
            name,
            description,
            price,
            imageUrl: req.file.path
        });

        res.status(201).json({ success: true, pizza })

    } catch (err) {
        res.status(500).json({ message: err.message });
        console.error(err);
    }
};

const UpdatePizza = async (req, res) => {
    try {
        const { name, description, price } = req.body;

        const pizzaId = req.params.id;

        const updateData = {
            name,
            description,
            price
        };

        if (req.file) {
            updateData.imageUrl = req.file.path;
        }
        const pizzatoUpdate = await Pizza.findByIdAndUpdate(
            pizzaId, updateData,
            { new: true }
        );

        console.log("FILE:", req.file);
        console.log("BODY:", req.body);

        if (!pizzatoUpdate) {
            res.status(404).json({ success: false, message: "Pizza not found!" });
        }

        res.status(200).json({ success: true, pizzatoUpdate, });
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.error(err);
    }
};

const GetAllPizzas = async (req, res) => {
    try {

        const pizzas = await Pizza.find({});

        if (!pizzas) {
            res.status(404).json({ success: false, message: "Pizzas Not Found" });
        }

        res.status(200).json({ success: true, pizzas });

    } catch (err) {
        res.status(500).json({ message: err.message });
        console.error(err);
    }
};

const GetPizzaById = async (req, res) => {
    try {
        const pizzaId = req.params.id;

        const getpizza = await Pizza.findById(
            pizzaId
        );

        res.status(200).json({ success: true, getpizza });
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.error(err);
    }
};

const DeletePizza = async (req, res) => {
    try {
        const pizzaId = req.params.id;

        const deletedPizza = await Pizza.findByIdAndDelete(
            pizzaId
        );

        if (!deletedPizza) {
            res.status(404).json({ success: false, message: "Pizza not found!" });
        }

        res.status(200).json({ success: true, deletedPizza })
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err);
    }
};

module.exports = { AddPizza, UpdatePizza, GetAllPizzas, GetPizzaById, DeletePizza };