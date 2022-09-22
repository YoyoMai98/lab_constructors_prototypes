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

const Dealership = function(dealerName, maxNumberOfCars){
    this.dealerName = dealerName;
    this.maxNumberOfCars = maxNumberOfCars;
    this.cars = [];
}

Dealership.prototype.getDealerName = function(){return this.dealerName};
Dealership.prototype.setDealerName = function(dealerName){this.dealerName = dealerName};
Dealership.prototype.getMaxNumberOfCars = function(){return this.maxNumberOfCars};
Dealership.prototype.setMaxNumberOfCars = function(maxNumberOfCars){this.maxNumberOfCars = maxNumberOfCars};
Dealership.prototype.getCars = function(){return this.cars};
Dealership.prototype.addCars = function(car){
    if(this.cars.length < this.getMaxNumberOfCars()){
        this.cars.push(car);
    }
};
Dealership.prototype.removeCars = function(car){this.cars.splice(this.cars.indexOf(car),1)};

Dealership.prototype.countNumberOfCars = function(){return this.cars.length};
Dealership.prototype.getAllManufacturers = function(){
    return this.cars.map(car => car.getManufacturer());
}
Dealership.prototype.findAGivenManufacturer = function(manufacturer){
    return this.cars.filter(car => car.getManufacturer() === manufacturer);
}
Dealership.prototype.countTotalValue = function(){
    return this.cars.reduce((reducer, car) => reducer + car.getPrice(), 0)
}

const car1 = new Car('BMW', 38, 'N46');
const car2 = new Car('BMW', 46, 'N43');
const car3 = new Car('BMW', 24, 'N13');

const dealership1 = new Dealership('Cargiant', 2);
dealership1.addCars(car1);
console.log(dealership1.countTotalValue());
module.exports = {car1, car2, car3, dealership1};