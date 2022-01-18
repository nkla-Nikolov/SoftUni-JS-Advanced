function print(arr, n){
    let newArr = [];
    n = Number(n);
    
    for (let i = 0; i < arr.length; i += n) {
        newArr.push(arr[i]);
    }

    return newArr;
}

console.log(print(['5', 
'20', 
'31', 
'4', 
'20'], 
2));