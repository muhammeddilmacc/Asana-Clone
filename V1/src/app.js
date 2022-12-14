const express = require('express');
const helmet = require('helmet');
const config = require('./config');

config(); // load config

const app = express();

app.use(express.json());// parse body
app.use(helmet());// security

// cors


// routes




app.listen(process.env.APP_PORT, () => {
    console.log('Server is running on port 3000');
}
);