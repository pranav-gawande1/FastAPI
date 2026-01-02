const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require("../models/User");

const signup = async (req, res) => {
    try {
        const { name, email, password, role, is_active } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409)
                .json({ message: 'User already exists, you can login', success: false });
        }
        const userModel = new UserModel({ name, email, password, role, is_active });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        // const jwttok = jwt.sign({ email: user.email, id: user._id },
        //     process.env.JWT_SECRET,
        //     { expiresIn: '24h' }
        // )
        // res.cookie(jwttok, {
        //     token: jwttok,
        //     httpOnly: true,
        //     secure: true,
        //     sameSite: 'None'
        // });
        res.status(201)
            .json({
                message: "SignUp Successfully",
                success: true,
                email,
                name,
                role,
            })
    } catch (err) {
        res.status(500)
            .json({
                message: "Internal Server error",
                success: false
            })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
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
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            maxAge: 24 * 60 * 60 * 1000,
        });
        res.status(200)
            .json({
                message: "Login Successfully",
                success: true,
                email,
                name: user.name,
                role: user.role,
                is_active: user.is_active
            })
    }
    catch (err) {
        res.status(500)
            .json({
                message: "Internal Server error",
                success: false
            })
    }
}

module.exports = {
    signup,
    login
}

