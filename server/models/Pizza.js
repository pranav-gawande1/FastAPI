const { required } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PizzaSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type :String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
}, { timestamps: true})

const PizzaModel = mongoose.model('pizzas', PizzaSchema)
module.exports = PizzaModel;