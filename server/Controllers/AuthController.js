const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require("../models/User");

const signup = async (req, res) => {
    try {
        const { name, email, password, is_staff, is_active } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409)
                .json({ message: 'User already exists, you can login', success: false });
        }
        const userModel = new UserModel({ name, email, password, is_staff, is_active });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        const jwttok = jwt.sign({ email: user.email, id: user.__id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )
        res.cookie(jwttok, {
            token: jwttok,
            httpOnly: true,
            secure: true,
            sameSite: 'None'
        });
        res.status(201)
            .json({
                message: "SignUp Successfully",
                success: true
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
        const jwttok = jwt.sign({ email: user.email, id: user.__id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )
        res.cookie(jwttok, {
            token: jwttok,
            httpOnly: true,
            secure: true,
            sameSite: 'None'
        });
        res.status(201)
            .json({
                message: "Login Successfully",
                success: true,
                email,
                name: user.name,
                is_staff: user.is_staff,
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

