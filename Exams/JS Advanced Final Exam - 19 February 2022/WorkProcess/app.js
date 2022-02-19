function solve() {
    let firstNameElement = document.querySelector('#fname');
    let lastNameElement = document.querySelector('#lname');
    let emailElement = document.querySelector('#email');
    let birthElement = document.querySelector('#birth');
    let positionElement = document.querySelector('#position');
    let salaryElement = document.querySelector('#salary');
    let hireWorkerButton = document.querySelector('#add-worker');
    let tableElement = document.querySelector('#tbody');
    let sumElement = document.querySelector('#sum');


    if ((firstNameElement.value && lastNameElement.value && emailElement.value
        && birthElement.value && positionElement.value && salaryElement.value) != ' ') {

        hireWorkerButton.addEventListener('click', (e) => {
            e.preventDefault();

            let rowElement = document.createElement('tr');
            let tdFirstName = document.createElement('td');
            let tdLastName = document.createElement('td');
            let tdEmail = document.createElement('td');
            let tdBirth = document.createElement('td');
            let tdPosition = document.createElement('td');
            let tdSalary = document.createElement('td');
            let tdButtons = document.createElement('td');

            let fireButton = document.createElement('button');
            let editButton = document.createElement('button');

            fireButton.textContent = 'Fired';
            fireButton.classList.add('fired');
            fireButton.classList.add('button-block');

            editButton.textContent = 'Edit';
            editButton.classList.add('edit');
            editButton.classList.add('button-block');

            tdButtons.appendChild(fireButton);
            tdButtons.appendChild(editButton);

            tdFirstName.textContent = firstNameElement.value;
            tdLastName.textContent = lastNameElement.value;
            tdEmail.textContent = emailElement.value;
            tdBirth.textContent = birthElement.value;
            tdPosition.textContent = positionElement.value;
            tdSalary.textContent = salaryElement.value;

            rowElement.appendChild(tdFirstName);
            rowElement.appendChild(tdLastName);
            rowElement.appendChild(tdEmail);
            rowElement.appendChild(tdBirth);
            rowElement.appendChild(tdPosition);
            rowElement.appendChild(tdSalary);
            rowElement.appendChild(tdButtons);
            tableElement.appendChild(rowElement);

            let currentSum = Number(sumElement.textContent);
            currentSum += Number(salaryElement.value);
            sumElement.textContent = currentSum.toFixed(2);

            editButton.addEventListener('click', (e) => {
                firstNameElement.value = tdFirstName.textContent;
                lastNameElement.value = tdLastName.textContent;
                emailElement.value = tdEmail.textContent;
                birthElement.value = tdBirth.textContent;
                positionElement.value = tdPosition.textContent;
                salaryElement.value = tdSalary.textContent;
                sumElement.textContent = Number(sumElement.textContent - salaryElement.value).toFixed(2);

                e.currentTarget.parentNode.parentNode.remove();
            });

            fireButton.addEventListener('click', (e) => {
                sumElement.textContent = Number(sumElement.textContent - Number(e.currentTarget.parentNode.parentNode.children[5].textContent)).toFixed(2);

                e.currentTarget.parentNode.parentNode.remove();
            });


            firstNameElement.value = '';
            lastNameElement.value = '';
            emailElement.value = '';
            birthElement.value = '';
            positionElement.value = '';
            salaryElement.value = '';

        });
    }
}
solve()