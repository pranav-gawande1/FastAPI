const mongoose = require('mongoose');
const mongo_url = process.env.MONGO_CONN;

require('dotenv').config();
console.log('MongoDB Connection String:', mongo_url);

mongoose.connect(mongo_url)
    .then(() => {
        console.log('MongoDB connected....');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    })