window.addEventListener('load', solve);

function solve() {
    document.querySelector('#add').addEventListener('click', (e) => {
        let modelInput = document.querySelector('#model');
        let yearInput = document.querySelector('#year');
        let descriptionInput = document.querySelector('#description');
        let priceInput = document.querySelector('#price');

        let model = modelInput.value;
        let year = Number(yearInput.value);
        let description = descriptionInput.value;
        let price = Number(priceInput.value);

        if (model && year > 0 && description && price > 0) {
            e.preventDefault();

            modelInput.value = '';
            yearInput.value = '';
            descriptionInput.value = '';
            priceInput.value = '';

            let furnitureListElement = document.querySelector('#furniture-list');

            let rowElement = document.createElement('tr');
            let tdNameElement = document.createElement('td');
            let tdPriceElement = document.createElement('td');
            let buttonElements = document.createElement('td');
            let moreInfoButton = document.createElement('button');
            let buyButton = document.createElement('button');

            rowElement.classList.add('info');
            tdNameElement.textContent = model;
            tdPriceElement.textContent = price.toFixed(2);
            moreInfoButton.classList.add('moreBtn');
            moreInfoButton.textContent = 'More Info';
            buyButton.classList.add('buyBtn');
            buyButton.textContent = 'Buy it';
            buttonElements.appendChild(moreInfoButton);
            buttonElements.appendChild(buyButton);
            rowElement.appendChild(tdNameElement);
            rowElement.appendChild(tdPriceElement);
            rowElement.appendChild(buttonElements);

            let hiddenRowElement = document.createElement('tr');
            let yearElement = document.createElement('td');
            let descriptionElement = document.createElement('td');

            hiddenRowElement.classList.add('hide');
            yearElement.textContent = `Year: ${year}`;
            descriptionElement.setAttribute('colspan', 3);
            descriptionElement.textContent = `Description: ${description}`;

            hiddenRowElement.appendChild(yearElement);
            hiddenRowElement.appendChild(descriptionElement);

            furnitureListElement.appendChild(rowElement);
            furnitureListElement.appendChild(hiddenRowElement);

            moreInfoButton.addEventListener('click', (e) => {
                if (e.target.textContent == 'More Info') {
                    e.target.textContent = 'Less Info';
                    hiddenRowElement.style.display = 'contents';
                }
                else {
                    e.target.textContent = 'More Info';
                    hiddenRowElement.style.display = 'none';
                }
            });

            buyButton.addEventListener('click', (e) => {
                e.currentTarget.parentNode.parentNode.remove();
                let storeProfit = document.querySelector('.total-price');
                let currentPrice = Number(e.currentTarget.parentNode.parentNode.children[1].textContent);

                storeProfit.textContent = (Number(storeProfit.textContent) + currentPrice).toFixed(2);
            });
        };
    });
};
