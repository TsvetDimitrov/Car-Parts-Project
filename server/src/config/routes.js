const authController = require('../controllers/authController');
const createController = require('../controllers/createController');


module.exports = (app) => {
    app.use('/create', createController);
    app.use('/auth', authController);
};