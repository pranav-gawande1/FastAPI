const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const AuthRouter = require('./Routes/AuthRouter')

require('dotenv').config();

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

app.use(bodyParser.json());
app.use('/auth', AuthRouter);

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});