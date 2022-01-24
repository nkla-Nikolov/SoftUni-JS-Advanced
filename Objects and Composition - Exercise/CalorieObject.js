function calorieObject(arr){
    let object = {};

    for (let i  = 0; i < arr.length; i += 2) {
        let name = arr[i];
        let calories = Number(arr[i + 1]);
        object[name] = calories;
    }

    console.log(object);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);