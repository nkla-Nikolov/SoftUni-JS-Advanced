function deleteByEmail() {
    let rowElements = document.querySelectorAll('table tr td:nth-of-type(2)');
    let textInput = document.querySelector('input[name="email"]');
    let result = document.getElementById('result');
    let elementsCount = rowElements.length;
    let counter = elementsCount;

    for (const email of rowElements) {
        if(email.textContent === textInput.value){
            email.parentNode.remove();
            result.textContent = 'Deleted.'
            counter--;
        }
    }

    if(counter == elementsCount){
        result.textContent = 'Not found.'
    }
}