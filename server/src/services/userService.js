const User = require('../models/User');

async function createUser(name, email, password) {
    const user = new User({
        name,
        email,
        password
    });

    await user.save();

    return user;
}

async function getUserByEmail(email) {
    const pattern = new RegExp(`^${email}$`, 'i');
    const user = await User.findOne({ username: { $regex: pattern } });

    return user;
}

module.exports = {
    createUser,
    getUserByEmail
}