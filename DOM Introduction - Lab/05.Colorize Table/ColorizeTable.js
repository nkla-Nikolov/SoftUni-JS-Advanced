function colorize() {
    let rowElements = document.getElementsByTagName('tr')
    let arrayRowElements = Array.from(rowElements);
    
    for (let i = 0; i < arrayRowElements.length; i++) {
        if (i % 2 != 0) {
            arrayRowElements[i].style.backgroundColor = 'teal';
        }
    }
}