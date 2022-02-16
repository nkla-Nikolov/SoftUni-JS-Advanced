window.addEventListener('load', solution);

function solution() {
  let fullNameValue = document.querySelector('#fname');
  let emailValue = document.querySelector('#email');
  let phoneNumberValue = document.querySelector('#phone');
  let addressValue = document.querySelector('#address');
  let postalCodeValue = document.querySelector('#code');

  let submitButton = document.querySelector('#submitBTN');
  submitButton.addEventListener('click', (e) => {

    if (fullNameValue.value && emailValue.value) {
      let previewSection = document.querySelector('#infoPreview');

      let fullName = fullNameValue.value;
      let email = emailValue.value;
      let phoneNumber = phoneNumberValue.value;
      let address = addressValue.value;
      let postalCode = postalCodeValue.value;

      let liNameElement = document.createElement('li');
      liNameElement.textContent = `Full Name: ${fullNameValue.value}`;

      let liEmailElement = document.createElement('li');
      liEmailElement.textContent = `Email: ${emailValue.value}`;

      let liPhoneElement = document.createElement('li');
      liPhoneElement.textContent = `Phone Number: ${phoneNumberValue.value}`;

      let liadressElement = document.createElement('li');
      liadressElement.textContent = `Address: ${addressValue.value}`;

      let liCodeElement = document.createElement('li');
      liCodeElement.textContent = `Postal Code: ${postalCodeValue.value}`;

      previewSection.appendChild(liNameElement);
      previewSection.appendChild(liEmailElement);
      previewSection.appendChild(liPhoneElement);
      previewSection.appendChild(liadressElement);
      previewSection.appendChild(liCodeElement);

      e.currentTarget.disabled = true;
      fullNameValue.value = '';
      emailValue.value = '';
      phoneNumberValue.value = '';
      addressValue.value = '';
      postalCodeValue.value = '';

      let editButton = document.querySelector('#editBTN');
      editButton.disabled = false;
      let continueButton = document.querySelector('#continueBTN');
      continueButton.disabled = false;

      editButton.addEventListener('click', (e) => {
        e.currentTarget.disabled = false;
        
        fullNameValue.value = fullName;
        emailValue.value = email;
        phoneNumberValue.value = phoneNumber;
        addressValue.value = address;
        postalCodeValue.value = postalCode;
        e.currentTarget.disabled = true;
        e.currentTarget.parentNode.children[1].disabled = true;
        submitButton.disabled = false;
        
        Array.from(previewSection.children).forEach(x => x.remove());
      });

      continueButton.addEventListener('click', () => {
        let blockDiv = document.querySelector('#block');
        let h3Element = document.createElement('h3');
        h3Element.textContent = "Thank you for your reservation!";

        Array.from(blockDiv.children).forEach(x => x.remove());
        blockDiv.appendChild(h3Element);
      });
    };
  });
};