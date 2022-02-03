function addItem() {
    let newItemTextElement = document.querySelector('#newItemText');
    let newItemValueElement = document.querySelector('#newItemValue');
    let menuElement = document.querySelector('#menu');
    
    let optionElement = document.createElement('option');
    optionElement.textContent = newItemTextElement.value;
    optionElement.value = newItemValueElement.value;

    menuElement.appendChild(optionElement);
    newItemTextElement.value = '';
    newItemValueElement.value = '';
}