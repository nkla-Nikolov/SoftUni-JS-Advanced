function addItem() {
    let itemsElement = document.getElementById('items');
    let textInput = document.getElementById('newItemText');

    let newItemElement = document.createElement('li');
    newItemElement.textContent = textInput.value;
    itemsElement.appendChild(newItemElement);
    textInput.value = '';
}