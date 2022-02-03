function attachEventsListeners() {
    let daysButton = document.querySelector('#daysBtn');
    let hoursButton = document.querySelector('#hoursBtn');
    let minutesButton = document.querySelector('#minutesBtn');
    let secondsButton = document.querySelector('#secondsBtn');

    let daysInput = document.querySelector('#days');
    let hoursInput = document.querySelector('#hours');
    let minutesInput = document.querySelector('#minutes');
    let secondsInput = document.querySelector('#seconds');

    daysButton.addEventListener('click', () => {
        hoursInput.value = daysInput.value * 24;
        minutesInput.value = hoursInput.value * 60;
        secondsInput.value = minutesInput.value * 60;
    });

    hoursButton.addEventListener('click', () => {
        daysInput.value = hoursInput.value / 24;
        minutesInput.value = hoursInput.value * 60;
        secondsInput.value = minutesInput.value * 60;
    });

    minutesButton.addEventListener('click', () => {
        secondsInput.value = minutesInput.value * 60;
        hoursInput.value = minutesInput.value / 60;
        daysInput.value = hoursInput.value / 24;
    });

    secondsButton.addEventListener('click', () => {
        minutesInput.value = secondsInput.value / 60;
        hoursInput.value = minutesInput.value / 60;
        daysInput.value = hoursInput.value / 24;
    });

}