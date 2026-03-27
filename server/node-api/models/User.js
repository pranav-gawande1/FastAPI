const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    is_active: {
        type: Boolean,
        default: true
    },
    address: {
        type: String,
        default: null
    },
    city: {
        type: String,
        default: null
    },
    state: {
        type: String,
        default: null
    },
    pincode: {
        type: Number,
        default: null
    },
    is_profile_completed: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const UserModel = mongoose.model('users', UserSchema)
module.exports = UserModel;