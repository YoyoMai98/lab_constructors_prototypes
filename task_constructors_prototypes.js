const Car = function(manufacturer, price, engineType){
    this.manufacturer = manufacturer;
    this.price = price;
    this.engineType = engineType;
}

Car.prototype.getManufacturer = function(){return this.manufacturer};
Car.prototype.setManufacturer = function(manufacturer){this.manufacturer = manufacturer};
Car.prototype.getPrice = function(){return this.price};
Car.prototype.setPrice = function(price){this.price = price};
Car.prototype.getEngineType = function(){return this.engineType};
Car.prototype.setEngineType = function(engineType){this.engineType = engineType};

const car1 = new Car('BMW', 38, 'N46');

module.exports = {car1};