const Part = require('../models/Part');

async function createPart(partData) {
    const part = new Part(partData);
    await part.save();
    return part;
}

async function getNavigationSystems() {
    const parts = await Part.find({ type: 'GPS и навигации' }).lean();
    
    return parts;
}

module.exports = {
    createPart,
    getNavigationSystems
}