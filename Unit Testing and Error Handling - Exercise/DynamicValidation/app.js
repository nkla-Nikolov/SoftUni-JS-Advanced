function validate() {
    let fieldElement = document.querySelector('#email');
    let emailRegEx = /[a-z]*@[a-z]*\.[a-z]+/;

    fieldElement.addEventListener('change', () => {
        
        if(!emailRegEx.test(fieldElement.value)){
            fieldElement.classList.add('error');
        }
        else{
            fieldElement.classList.remove('error');
        }
    });
};