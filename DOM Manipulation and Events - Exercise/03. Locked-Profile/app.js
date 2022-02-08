function lockedProfile() {
    let buttonElements = Array.from(document.getElementsByTagName('button'));

    buttonElements.forEach(x => x.addEventListener('click', (e) => {
        let locked = e.target.parentNode.children[2].checked;
        if(locked){
            return;
        }

        if(e.target.textContent === 'Show more'){
            e.target.textContent = 'Hide it';
            e.target.parentNode.children[9].style.display = 'block';
        }
        else{
            e.target.textContent = 'Show more';
            e.target.parentNode.children[9].style.display = 'none';
        }
    }));
}