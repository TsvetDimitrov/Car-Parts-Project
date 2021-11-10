const mongoose = require('mongoose');


const carSchema = new mongoose.Schema({
    additionalInfo: { type: String },
    brand: { type: String },
    engineType: { type: String },
    gearboxType: { type: String },
    manufactureYear: { type: String },
    model: { type: String },
    priceWanted: { type: String },
    imageUrl: { type: String },
}, { timestamps: true });


const Car = mongoose.model('Car', carSchema);

module.exports = Car;