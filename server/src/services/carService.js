const Car = require('../models/Car');

async function createCar(partData) {
    const car = new Car(partData);
    await car.save();
    return car;
}

module.exports = {
    createCar,
}