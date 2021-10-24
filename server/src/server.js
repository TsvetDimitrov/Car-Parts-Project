const express = require('express');
const cors = require('cors');

const { PORT } = require('./config/constants');
const databaseConfig = require('./config/database');
const routesConfig = require('./config/routes');
const expressConfig = require('./config/express');


start();
async function start() {
    const app = express();
    await databaseConfig(app);
    app.use(express.json());

    expressConfig(app);

    //Can use cors library instead of that.
    app.use(cors());
    app.get('/', (req, res) => {
        res.json({ text: 'It\'s working!' });
    });

    routesConfig(app);

    app.listen(PORT, () => console.log(`App started at http://localhost:${PORT}`));
}
