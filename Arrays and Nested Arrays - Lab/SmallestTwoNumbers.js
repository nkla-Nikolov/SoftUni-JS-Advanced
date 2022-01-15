function smallest (arr){
    let sorted = arr.sort((a, b) => a - b);
    sorted = sorted.slice(0, 2);
    return sorted.join(' ');
}