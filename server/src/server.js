const express = require('express');
const { PORT } = require('./config/constants');
const databaseConfig = require('./config/database');
const routesConfig = require('./config/routes');


start();
async function start() {
    const app = express();
    await databaseConfig();
    app.use(express.json());
    //Can use cors library instead of that.
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');

        next();
    });

    app.get('/', (req, res) => {
        res.json({ text: 'It\'s working!' });
    });

    routesConfig(app);

    app.listen(PORT, () => console.log(`App is running on port: ${PORT}`));

}
