const express = require('express');
const app = express();
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');

dotenv.config();

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to DB');
});

app.use('/', (req, res) => {
    res.send('Hello World!');
});

app.listen("5000", () => {
    console.log('Server is running on port 3000');
}); 