function sumTable() {
    let elements = document.querySelectorAll('td');
    let elementsAsArray = Array.from(elements);
    let sum = 0;

    for (let i = 1; i < elementsAsArray.length - 2; i++) {
        if(i % 2 != 0){
            sum += Number(elementsAsArray[i].textContent);
        }
    }
    
    let total = document.getElementById('sum');
    total.textContent = sum;
}