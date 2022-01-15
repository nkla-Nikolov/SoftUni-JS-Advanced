function positiveNegativeNumbers(arr){
    let filtered = [];

    for (const number of arr) {
        if(number < 0){
            filtered.unshift(number)
        }
        else{
            filtered.push(number);
        }
    }

    for (const number of filtered) {
        console.log(number);
    }
}