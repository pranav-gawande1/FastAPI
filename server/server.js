const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const AuthRouter = require('./Routes/AuthRoutes/AuthRouter.js')
const PizzaRouter = require("./Routes/PizzaRoutes/PizzaRoutes.js")
const UserRouter = require("./Routes/UserRoutes.js")
const cookieParser = require("cookie-parser");

require("dotenv").config();

require('./models/db')

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("hello world");
});

const allowedOrigins = [
    'http://localhost:5174',
    'http://localhost:5173'
];

app.use(cors({
    origin: allowedOrigins,
    credentials: true
}))

app.use(cookieParser());
app.use(express.json());

app.use(bodyParser.json());
// Auth routes
app.use('/auth', AuthRouter);

// Pizza routes
app.use('/pizza', PizzaRouter);

// User Router
app.use('/user', UserRouter);

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});