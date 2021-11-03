const Part = require('../models/Part');

async function createPart(partData){
    const part = new Part(partData);
    await part.save();
    return part;
}


module.exports = {
    createPart,
}