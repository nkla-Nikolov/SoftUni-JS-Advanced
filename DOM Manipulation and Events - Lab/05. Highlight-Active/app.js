function focused() {
    let inputElements = Array.from(document.querySelectorAll('input[type="text"]'));
    
    for (const item of inputElements) {
        item.addEventListener('focus', (e) => {
            e.target.parentNode.className = 'focused'
        });

        item.addEventListener('blur', (e) => {
            e.target.parentNode.className = 'blurred';
        });
    }
}