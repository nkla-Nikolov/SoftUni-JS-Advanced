window.addEventListener('load', solve);

function solve() {

    document.querySelector('#add-btn').addEventListener('click', (e) => {
        let genreElement = document.querySelector('#genre');
        let nameElement = document.querySelector('#name');
        let authorElement = document.querySelector('#author');
        let dateElement = document.querySelector('#date');
        let allHitsContainer = document.querySelector('.all-hits-container');

        if (!genreElement.value || !nameElement.value || !authorElement.value || !dateElement.value) {
            return;
        }

        e.preventDefault();

        let divElement = document.createElement('div');
        divElement.classList.add('hits-info');
        let img = document.createElement('img');
        img.src = './static/img/img.png';
        let h2Genre = document.createElement('h2');
        h2Genre.textContent = `Genre: ${genreElement.value}`;
        let h2Name = document.createElement('h2');
        h2Name.textContent = `Name: ${nameElement.value}`;
        let h2Author = document.createElement('h2');
        h2Author.textContent = `Author: ${authorElement.value}`;
        let h3Date = document.createElement('h3');
        h3Date.textContent = `Date: ${dateElement.value}`;
        let saveButton = document.createElement('button');
        saveButton.textContent = 'Save song';
        saveButton.classList.add('save-btn');
        let likeButton = document.createElement('button');
        likeButton.textContent = 'Like song';
        likeButton.classList.add('like-btn');
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');

        divElement.appendChild(img);
        divElement.appendChild(h2Genre);
        divElement.appendChild(h2Name);
        divElement.appendChild(h2Author);
        divElement.appendChild(h3Date);
        divElement.appendChild(saveButton);
        divElement.appendChild(likeButton);
        divElement.appendChild(deleteButton);
        allHitsContainer.appendChild(divElement);

        genreElement.value = '';
        nameElement.value = '';
        authorElement.value = '';
        dateElement.value = '';

        likeButton.addEventListener('click', (e) => {
            let likesElement = document.querySelector('.likes p');
            let likes = Number(likesElement.textContent
            .split(' ').pop());
            likesElement.textContent = `Total Likes: ${likes += 1}`;
            console.log(likes);
            e.currentTarget.disabled = true;
        });


        saveButton.addEventListener('click', (e) => {
            const parent = e.target.parentNode;
            parent.children[6].remove();
            parent.children[5].remove();
            document.querySelector('.saved-container').appendChild(parent);
            
        });

        deleteButton.addEventListener('click', (e) => {
            e.currentTarget.parentNode.remove();
        });
    });
};