const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.status(200).send({ message: 'server is up' });
});

app.listen(3232, () => {
    console.log('Server is running on port 3000');
}
);