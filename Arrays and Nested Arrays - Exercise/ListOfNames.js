function printNames (names){
    let counter = 1;
    names.sort((x, y) => x.localeCompare(y))
    
    for (const name of names) {
        console.log(`${counter}.${name}`);
        counter++;
    }
}

printNames(["John", "Bob", "Christina", "Ema"])