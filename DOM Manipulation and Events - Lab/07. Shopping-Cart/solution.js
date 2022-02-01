function solve() {
   let textAreaElement = document.getElementsByTagName('textarea')[0];
   let addButtonElements = document.getElementsByClassName('add-product');
   let productElements = document.querySelectorAll('.product');
   let checkoutElement = document.querySelector('.checkout');

   let totalPrice = 0;
   let itemsBought = [];

   for (let i = 0; i < addButtonElements.length; i++) {
      addButtonElements[i].addEventListener('click', () => {
         let productName = productElements[i].getElementsByClassName('product-title')[0].textContent;
         let price = Number(productElements[i].getElementsByClassName('product-line-price')[0].textContent);
         textAreaElement.textContent += `Added ${productName} for ${price.toFixed(2)} to the cart.\n`
         totalPrice += price;

         if(!itemsBought.includes(productName)){
            itemsBought.push(productName);
         }
      })
   }
   
   checkoutElement.addEventListener('click', () => {
      textAreaElement.textContent += `You bought ${itemsBought.join(', ')} for ${totalPrice.toFixed(2)}.`
      checkoutElement.ariaDisabled = true;

      for (const button of addButtonElements) {
         button.ariaDisabled = true;
      }
      
   });
}