function solve(oldCar){
    let engine = {};
    
    if (oldCar.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    }
    else if (oldCar.power > 90 && oldCar.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
    }
    else{
        engine.power = 200;
        engine.volume = 3500;
    }

    let carriage = {
        type: oldCar.carriage,
        color: oldCar.color
    };

    if (oldCar.wheelsize % 2 === 0) {
        oldCar.wheelsize--;
    }

    let wheels = [];
    wheels.length = 4;
    wheels.fill(oldCar.wheelsize, 0, 4);

    let car = {
        model: oldCar.model,
        engine,
        carriage,
        wheels
    }

    return car;
}

console.log(solve({ model: 'VW Golf II', power: 90, color: 'blue', carriage: 'hatchback', wheelsize: 14 }));