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