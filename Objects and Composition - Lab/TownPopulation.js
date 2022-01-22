function solve(input){
    const towns = [];
    
    for (let i = 0; i < input.length; i++) {

        let townsSplitted = input[i].split(" <-> ");
        let townName = townsSplitted[0];
        let population = Number(townsSplitted[1]);

        if (!towns[townName]) {
            towns[townName] = 0;
        }

        towns[townName] += population;
    }
    
    for (let town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }

}

//solve(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000']);

solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);