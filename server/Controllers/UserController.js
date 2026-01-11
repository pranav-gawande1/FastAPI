const UserModel = require("../models/User");

const completeProfile = async (req, res) => {
    try {
        const { address, city, state, pincode } = req.body;
        if (!address || !city || !state || !pincode) {
            return res.status(400).json({
                message: "All profile fields are required."
            });
        }

        // console.log("REQ_USER", req.user);
        const updateUser = await UserModel.findByIdAndUpdate(
            req.user._id,
            {
                address,
                city,
                state,
                pincode,
                is_profile_completed: true
            },
            { new: true }
        );

        res.status(200).json({
            message: "Profile Updated Successfully.",
            user: {
                id: updateUser._id,
                name: updateUser.name,
                email: updateUser.email,
                role: updateUser.role,
                is_profile_completed: updateUser.is_profile_completed
            }
        });
    } catch (err) {
        res.status(500)
            .json({
                message: "Internal Server error",
                success: false
            })
    }
};

const DeleteUser = async (req, res) => {
    try {

        const userId = req.params.id;

        const deletedUser = await UserModel.findByIdAndDelete(
            userId
        );
        if (!deletedUser) {
            res.status(404).json({ success: false, message: "User not found!" });
        }

        res.status(200).json({
            message: "User Deleted Successfully",
            success: true,
            deletedUser
        })
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.error(err);
    }
};

const GetAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find({}).select("-password, -_id");
        if (!users) {
            res.status(404).json({ success: false, message: "Users not found!" });
        }

        res.status(200).json({
            success: true,
            users
        })
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.error(err);
    }
};

const UpdateUser = async (req, res) => {
    try {
        const { name, email, address, city, state, pincode } = req.body;

        const userId = req.params.id;
        const usertoUpdate = await UserModel.findByIdAndUpdate(
            userId,
            {
                name, email, address, city, state, pincode
            },
            { new: true }
        ).select("-password, -_id");

        if (!usertoUpdate) {
            res.status(404).json({ success: false, message: "User not found!" });
        }

        res.status(201).json({ success: true, usertoUpdate, });

    } catch (err) {
        res.status(500).json({ message: err.message });
        console.error(err);
    }
};


const GetUserById = async (req, res) => {
    try {
        const user = await UserModel.findById(req.user.id).select("-password");
        if (!user) {
            res.status(404).json({ success: false, message: "User Not found" });
        }
        res.status(200).json({
            message: true,
            user
        })
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.error(err);
    }
};

module.exports = { completeProfile, DeleteUser, GetAllUsers, UpdateUser, GetUserById };