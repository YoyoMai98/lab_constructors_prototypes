const task = require('./task_constructors_prototypes.js')

test('can access to getManufacturer', () => {
    expect(task.car1.getManufacturer()).toEqual("BMW");
})

test('can access to getPrice', () => {
    expect(task.car1.getPrice()).toEqual(38);
})

test('can access to getEngineTyoe', () => {
    expect(task.car1.getEngineType()).toEqual("N46");
})

test('can access to getDealshipName', () => {
    expect(task.dealership1.getDealerName()).toEqual("Cargiant");
})

test('can get max number of cars', () => {
    expect(task.dealership1.getMaxNumberOfCars()).toEqual(10);
})

test('can count number of cars', () => {
    expect(task.dealership1.countNumberOfCars()).toEqual(1);
})

test('can return manufacturers for each car', () => {
    expect(task.dealership1.getAllManufacturers()).toEqual(["BMW"]);
})

test('can get all the cars from a given manufacturer', () => {
    expect(task.dealership1.findAGivenManufacturer("BMW").length).toEqual(1);
})

test('can find the total value of all the cars in stock', () => {
    expect(task.dealership1.countTotalValue()).toEqual(38);
})
