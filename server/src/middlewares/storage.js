const part = require('../services/partService');

module.exports = () => (req, res, next) => {
    //TODO import and decorate services
    req.storage = {
        ...part
    };

    next();
};