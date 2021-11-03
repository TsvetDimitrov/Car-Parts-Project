const mongoose = require('mongoose');


const partSchema = new mongoose.Schema({
    category: { type: String, required: [true, 'Category is required!'] },
    type: { type: String, required: [true, 'Type is required!'] },
    brand: { type: String },
    model: { type: String },
    yearFrom: { type: Number },
    yearTo: { type: Number },
    engineType: { type: String },
    partColor: { type: String },
    imageUrl: { type: String },
    condition: { type: String },
    title: { type: String },
});


const Part = mongoose.model('Part', partSchema);

module.exports = Part;