function fibonacci(countOfElements, countOfPreviousElementsSum){
    let array = [];
    array[0] = 1;
    array[1] = 1;

    if (countOfPreviousElementsSum == 2) {
        for (let i = 2; i < countOfElements; i++) {
            array[i] = array[i - 1] + array[i - 2];
        }
    }
    else{
        for (let i = 2; i < countOfElements; i++) {
            array[i] = array[i - 1] + array[i - 2] + array[i - 3];
        }
    }

    return array;
}

console.log(fibonacci(6, 3));