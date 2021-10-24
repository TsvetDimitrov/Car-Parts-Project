const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { TOKEN_SECRET, COOKIE_NAME } = require('../config/constants');
const userService = require('../services/userService');

module.exports = () => (req, res, next) => {
    if (parseToken(req, res)) {
        req.auth = {
            async register(name, email, password) {
                const token = await register(name, email, password);
                res.cookie(COOKIE_NAME, token);
            },
            async login(email, password) {
                const token = await login(email, password);
                res.cookie(COOKIE_NAME, token);
            },

            logout() {
                res.clearCookie(COOKIE_NAME);
            }
        };
        next();
    }
};

async function register(name, email, password) {
    const existing = await userService.getUserByEmail(email);

    if (existing) {
        throw new Error('This email is already registered!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = userService.createUser(name, email, hashedPassword);

    return generateToken(user);
}

async function login(email, password) {
    const user = await userService.getUserByEmail(email);

    if (!user) {
        const err = new Error('No such email!');
        err.type = 'credential';
        throw err;
    }

    const hasMatch = await bcrypt.compare(password, user.password);
    if (!hasMatch) {
        const err = new Error('Incorrect password!');
        err.type = 'credential';
        throw err;
    }

    return generateToken(user);
}

function generateToken(userData) {
    return jwt.sign({
        _id: userData._id,
        email: userData.email,
        name: userData.name
    }, TOKEN_SECRET);
};

function parseToken(req, res){
    const token = req.cookies[COOKIE_NAME];

    if(token){
        try{
            const userData = jwt.verify(token, TOKEN_SECRET);
            req.user = userData;
            res.locals.user = userData;
        }catch(err){
            res.clearCookie(COOKIE_NAME);
            return false;
        }
    }

    return true;
}