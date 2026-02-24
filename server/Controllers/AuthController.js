const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require("../models/User");

const signup = async (req, res) => {
    try {
        const { name, email, password, role, is_active, is_profile_completed } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409)
                .json({ message: 'User already exists, you can login', success: false });
        }
        const userModel = new UserModel({ name, email, password, role, is_active, is_profile_completed });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        // AUTO-LOGIN: create token & set cookie

        const jwttok = jwt.sign({ id: userModel._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )

        res.cookie("token", jwttok, {
            httpOnly: false,
            secure: false,
            sameSite: 'lax',
            maxAge: 24 * 60 * 60 * 1000,
        });
        res.status(201)
            .json({
                message: "SignUp Successfully",
                success: true,
                email,
                name,
                role,
                is_active: userModel.is_active,
                is_profile_completed: userModel.is_profile_completed
            })
    } catch (err) {
        console.log("Error in signup:", err);
        res.status(500)
            .json({
                message: "Internal Server error",
                error: err,
                success: false
            })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user.is_active === false) {
            return res.status(403).json({
                message: "Your account is deactivated, please contact support", 
                success: false
            });
        }
        const errMsg = 'Auth failed ,email or password is wrong'
        if (!user) {
            return res.status(409)
                .json({ message: errMsg, success: false });
        }
        const isPassword = await bcrypt.compare(password, user.password);

        if (!isPassword) {
            return res.status(403)
                .json({ message: errMsg, success: false });
        }
        const jwttok = jwt.sign({ id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )
        res.cookie("token", jwttok, {
            httpOnly: false,
            secure: false,
            sameSite: 'lax',
            maxAge: 24 * 60 * 60 * 1000,
        });
        res.status(200)
            .json({
                message: "Login Successfully",
                success: true,
                id: user._id,
                email: user.email,
                name: user.name,
                role: user.role,
                is_active: user.is_active,
                is_profile_completed: user.is_profile_completed,
                token: jwttok,
            })
    }
    catch (err) {
        res.status(500)
            .json({
                message: "Internal Server error",
                error: err,
                success: false
            })
    }
}

const logout = (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production"
    });

    res.status(200).json({
        success: true,
        message: "Logged out successfully"
    });
};


module.exports = {
    signup,
    login,
    logout
}

