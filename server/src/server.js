const express = require('express');
const { PORT } = require('./config/constants');
const app = express();

app.get('/', (req, res) => {
    res.json({ text: 'It\'s working!' });
});


app.listen(PORT, () => console.log(`App is running on port: ${PORT}`));