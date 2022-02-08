function solve(array, start, end){
    if(!Array.isArray(array)){
        return NaN;
    }
    if(start < 0){
        start = 0;
    }
    if(end >= array.length){
        end = array.length - 1;
    }

    return array.slice(start, end + 1)
    .map(x => Number(x))
    .reduce((a, b) => a + b, 0);
}