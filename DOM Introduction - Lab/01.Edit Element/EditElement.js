function editElement(htmlElement, match, replacer) {
    let elementToString = htmlElement.textContent;

    while(elementToString.includes(match)){
        elementToString = elementToString.replace(match, replacer);
    }

    htmlElement.textContent = elementToString;
}