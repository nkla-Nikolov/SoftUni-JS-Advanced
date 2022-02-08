function solve() {

  let generateButton = document.querySelector('#exercise').children[2];
  generateButton.addEventListener('click', () => {
    let inputElement = document.querySelector('#exercise').children[1];
    let inputObjects = JSON.parse(inputElement.value)

    for (const obj of inputObjects) {
      
      let row = document.createElement('tr');
      let imageElement = document.createElement('td');
      let nameElement = document.createElement('td');
      let priceElement = document.createElement('td');
      let decorationFactor = document.createElement('td');
      let checkBoxElement = document.createElement('td');

      let image = document.createElement('img');
      image.src = obj.img;
      imageElement.appendChild(image);
      row.appendChild(imageElement);

      let productName = document.createElement('p');
      productName.textContent = obj.name;
      nameElement.appendChild(productName);
      row.appendChild(nameElement);

      let price = document.createElement('p');
      price.textContent = Number(obj.price);
      priceElement.appendChild(price);
      row.appendChild(priceElement);

      let decorFactor = document.createElement('p');
      decorFactor.textContent = obj.decFactor;
      decorationFactor.appendChild(decorFactor);
      row.appendChild(decorationFactor);

      let checkBoxInput = document.createElement('input');
      checkBoxInput.type = 'checkbox';
      checkBoxElement.appendChild(checkBoxInput);
      row.appendChild(checkBoxElement);

      document.getElementsByTagName('tbody')[0].appendChild(row);

    }
  });
  

  let buyButton = document.getElementsByTagName('button')[1];
  buyButton.addEventListener('click', () => {


    let rowBoxes = document.querySelectorAll('tr input');
    let productNames = [];
    let decorPoints = [];
    let totalPrice = 0;
    
    for (const box of rowBoxes) {
      if(box.checked){
        totalPrice += Number(box.parentElement.parentElement.children[2].textContent)
        productNames.push(box.parentElement.parentElement.children[1].textContent)
        decorPoints.push(Number(box.parentElement.parentElement.children[3].textContent))
      }
    }

    let output = document.getElementsByTagName('textarea')[1];
    output.value = `Bought furniture: ${productNames.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decorPoints.reduce((x, y) => x + y, 0) / decorPoints.length}`
  });
}