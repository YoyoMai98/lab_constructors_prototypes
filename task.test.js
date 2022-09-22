const task = require('./task_constructors_prototypes.js')

describe('car', () => {
    test('can access to getManufacturer', () => {
        expect(task.car1.getManufacturer()).toEqual("BMW");
    })

    test('can access to getPrice', () => {
        expect(task.car1.getPrice()).toEqual(38);
    })

    test('can access to getEngineTyoe', () => {
        expect(task.car1.getEngineType()).toEqual("N46");
    })
})

describe('dealership', () => {
    test('can access to getDealshipName', () => {
        expect(task.dealership1.getDealerName()).toEqual("Cargiant");
    })

    test('can get max number of cars', () => {
        expect(task.dealership1.getMaxNumberOfCars()).toEqual(2);
    })

    test('can count number of cars', () => {
        expect(task.dealership1.countNumberOfCars()).toEqual(1);
    })

    test('can add car', () => {
        task.dealership1.addCars(task.car2);
        expect(task.dealership1.countNumberOfCars()).toEqual(2);
    })

    test('not able to add car if the stock reach the max number', () => {
        task.dealership1.addCars(task.car3);
        expect(task.dealership1.countNumberOfCars()).toEqual(2);
    })

    test('can find a given manufacturer', () => {
        expect(task.dealership1.findAGivenManufacturer("BMW").length).toEqual(2);
    })

    test('can find a given price', () => {
        expect(task.dealership1.findAGivenPrice(46).length).toEqual(1);
    })

    test('can find a given engine type', () => {
        expect(task.dealership1.findAGivenEngineType("N46").length).toEqual(1);
    })

    test('can return manufacturers for each car', () => {
        let manufacturers = task.dealership1.getAllManufacturers();
        expect(manufacturers.length).toEqual(2);
    })

    test('can get all the cars from a given manufacturer', () => {
        expect(task.dealership1.findAGivenManufacturer("BMW").length).toEqual(2);
    })

    test('can find the total value of all the cars in stock', () => {
        expect(task.dealership1.countTotalValue()).toEqual(84);
    })

})

describe('customer', () => {
    test('can customer buy a car', () => {
        task.customer1.buyCar(task.car1, task.dealership1);
        expect(task.customer1.getCar().getEngineType()).toEqual("N46");
    })

    test('can get customer wallet', () => {
        expect(task.customer1.getWallet()).toEqual(12);
    })

    test('cannot afford to buy a new car', () => {
        task.customer1.buyCar(task.car2, task.dealership1);
        expect(task.customer1.getCar().getEngineType()).toEqual("N46");
    })

    test('cannot buy car that is not in the dealership', () => {
        task.customer1.buyCar(task.car3, task.dealership1);
        expect(task.customer1.getCar().getEngineType()).toEqual("N46");
    })

    test('check dealership car stock', () => {
        expect(task.dealership1.countNumberOfCars()).toEqual(1);
    })
})