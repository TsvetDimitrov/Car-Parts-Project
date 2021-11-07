const Part = require('../models/Part');
const userService = require('../services/userService');

async function createPart(partData) {
    const part = new Part(partData);
    await part.save();
    return part;
}

async function getNavigationSystems() {
    const parts = await Part.find({ type: 'GPS и навигации' }).lean();

    return parts;
}

async function getPartsByType(partsType) {
    const parts = await Part.find({ type: partsType }).lean();

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
    const user = await userService.getUserByEmail(userMail);

    part.orderedBy.push(user);
    user.orders.push(part);

    return Promise.all([user.save(), part.save()]);

}

async function deletePartById(id) {
    return Part.findByIdAndDelete(id);
}

module.exports = {
    createPart,
    getNavigationSystems,
    getPartsByType,
    getPartById,
    getAllParts,
    addPartToCart,
    deletePartById
}