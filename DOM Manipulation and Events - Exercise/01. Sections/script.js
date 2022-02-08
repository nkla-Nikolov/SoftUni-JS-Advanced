function create(words) {
   for (const word of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      let contentItem = document.querySelector('#content');

      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p);
      div.addEventListener('click', (e) => {
         e.target.children[0].style.display = 'block';
      });

      contentItem.appendChild(div);
   }
}