function neededPies(arr, firstName, lastName){
    let startIndex = 0;
    let endIndex = 0;

    startIndex = arr.indexOf(firstName);
    endIndex = arr.indexOf(lastName);
    let newArr = arr.slice(startIndex, endIndex + 1);
    return newArr;
}