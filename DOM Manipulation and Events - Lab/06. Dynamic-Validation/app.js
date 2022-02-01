function validate() {
    let inputEmail = document.getElementById('email');
    let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    inputEmail.addEventListener('change', (e) => {
        if(!pattern.test(inputEmail.value)){
            e.target.classList.add('error');
        }
        else{
            e.target.classList.remove('error');
        }
    })
}