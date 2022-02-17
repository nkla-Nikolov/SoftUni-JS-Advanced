function solve() {
   let authorInput = document.querySelector('#creator');
   let titleInput = document.querySelector('#title');
   let categoryInput = document.querySelector('#category');
   let contentInput = document.querySelector('#content');
   let createButton = document.querySelector('button[class="btn create"]');
   let articleSection = document.querySelector('div[class="site-content"] section');
   let archiveSection = document.querySelector('section[class="archive-section"] ol');

   createButton.addEventListener('click', (e) => {
      e.preventDefault();

      let articleElement = document.createElement('article');
      let h1Element = document.createElement('h1');
      let pCategoryElement = document.createElement('p');
      let pCreatorElement = document.createElement('p');
      let pContentElement = document.createElement('p');
      let divElement = document.createElement('div');
      let deleteButton = document.createElement('button');
      let archiveButton = document.createElement('button');

      h1Element.textContent = titleInput.value;

      pCategoryElement.textContent = "Category: "
      let strongElement = document.createElement('strong');
      strongElement.textContent = categoryInput.value;
      pCategoryElement.appendChild(strongElement);

      pCreatorElement.textContent = 'Creator: ';
      let strongCreatorElement = document.createElement('strong');
      pCreatorElement.appendChild(strongCreatorElement);
      strongCreatorElement.textContent = authorInput.value;

      pContentElement.textContent = contentInput.value;

      divElement.classList.add('buttons');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('btn');
      deleteButton.classList.add('delete');
      archiveButton.textContent = 'Archive';
      archiveButton.classList.add('btn');
      archiveButton.classList.add('archive');
      divElement.appendChild(deleteButton);
      divElement.appendChild(archiveButton);

      articleElement.appendChild(h1Element);
      articleElement.appendChild(pCategoryElement);
      articleElement.appendChild(pCreatorElement);
      articleElement.appendChild(pContentElement);
      articleElement.appendChild(divElement);

      articleSection.appendChild(articleElement);

      let title = titleInput.value;
      titleInput.value = '';
      authorInput.value = '';
      categoryInput.value = '';
      contentInput.value = '';

      archiveButton.addEventListener('click', () => {
         let liElement = document.createElement('li');
         liElement.textContent = title;

         let array = Array.from(archiveSection.childNodes);
         array.push(liElement);
         
         array.sort((a, b) => a.textContent.localeCompare(b.textContent));
         array.forEach(x => archiveSection.appendChild(x));

         articleElement.remove();
      });

      deleteButton.addEventListener('click', () => {
         articleElement.remove();
      });
   });
};
