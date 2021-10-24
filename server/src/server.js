const express = require('express');
const { PORT } = require('./config/constants');
const routes = require('./config/routes');


const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ text: 'It\'s working!' });
});

app.use(routes);

app.listen(PORT, () => console.log(`App is running on port: ${PORT}`));