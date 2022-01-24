function solve(arr){
    let heroes = [];

    for (let i = 0; i < arr.length; i++) {
        let [name, level, items] = arr[i].split(' / ');

        let hero = {    
            name,
            level: Number(level),
            items: items != undefined ? items.split(', ') : []
        }

        heroes.push(hero);
    }
    
    console.log(JSON.stringify(heroes));
}

solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);