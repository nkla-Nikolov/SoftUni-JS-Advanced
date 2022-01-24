function solve(arr){
    let cities = [];

    for (let i = 1; i < arr.length; i++) {
        let line = arr[i].split('|').filter(x => x);
        let Town = line[0].trim();
        let Latitude = Number(line[1]).toFixed(2);
        let Longitude = Number(line[2]).toFixed(2);

        let city = {
            Town,
            Latitude: Number(Latitude),
            Longitude: Number(Longitude)
        }

        cities.push(city);
    }
    
    console.log(JSON.stringify(cities));
}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);