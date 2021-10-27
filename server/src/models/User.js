const mongoose = require('mongoose');

let validateEmail = function (email) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(email);
};

const userSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Name is required!'] },
    email: { type: String, required: [true, 'Email is required!'], validate: [validateEmail, 'Please fill a valid email address'], unique: [true, 'This email already exists!'] },
    isAdmin: {type: Number, default: 0},
    password: { type: String, required: [true, 'Password is required!'] },
    facebookId: {type: String},
});


const User = mongoose.model('User', userSchema);

module.exports = User;




