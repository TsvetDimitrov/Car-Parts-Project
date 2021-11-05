const Part = require('../models/Part');
const User = require('../models/User');

async function createPart(partData) {
    const part = new Part(partData);
    await part.save();
    return part;
}

async function getNavigationSystems() {
    const parts = await Part.find({ type: 'GPS и навигации' }).lean();

    return parts;
}

async function getPartById(id) {
    const part = await Part.findById(id).lean();

    return part;
}

async function getAllParts() {
    const parts = await Part.find({}).lean();

    return parts;
}

async function addPartToCart(id, userMail) {
    const part = await Part.findById(id);
    const user = await User.getUserByEmail(userMail);

    part.orderedBy.push(user);
    user.orders.push(part);

    return Promise.all([user.save(), part.save()]);

}
module.exports = {
    createPart,
    getNavigationSystems,
    getPartById,
    getAllParts,
    addPartToCart
}