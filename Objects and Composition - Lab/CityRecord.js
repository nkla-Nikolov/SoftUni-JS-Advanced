function declare(name, population, treasury){
    let town = {
        name,
        population,
        treasury
    };

    return town;
}

console.log(declare('Tortuga',
7000,
15000));