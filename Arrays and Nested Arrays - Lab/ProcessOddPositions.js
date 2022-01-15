function doubledOddElements(arr){
    let reversedArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        if(i % 2 == 0){
            continue;
        }

        reversedArray.unshift(arr[i] * 2)
    }

    return reversedArray.join(' ');
}