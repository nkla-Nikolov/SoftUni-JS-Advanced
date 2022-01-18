function extract(arr){
    let newArr = [];
    newArr.push(arr[0]);
    
    arr.reduce((x, y) => {
        if (y >= newArr[newArr.length - 1]) {
            newArr.push(y);
        }
    });

    return newArr;
}

console.log(extract([1, 3, 8, 4, 10, 12, 3, 2, 24]));

console.log(extract([1, 2, 3,4]));

console.log(extract([20, 3, 2, 15,6, 1]));