function rotate(arr, rotationsCount){
    rotationsCount = Number(rotationsCount);

    for (let i = 0; i < rotationsCount; i++) {
        let element = arr.pop();
        arr.unshift(element);
    }

    console.log(arr.join(' '));
}

rotate(['1', 
'2', 
'3', 
'4'], 
2);