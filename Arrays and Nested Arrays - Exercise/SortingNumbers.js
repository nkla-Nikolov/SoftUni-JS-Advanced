function solve(arr){
    arr.sort((a, b) => a - b);
    let sorted = [];

    while(arr.length > 0){
        sorted.push(arr.shift());
        sorted.push(arr.pop());
    }

    return sorted;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));