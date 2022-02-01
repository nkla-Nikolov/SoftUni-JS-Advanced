function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient')
    let result = document.getElementById('result');

    function move(e){
        result.textContent = `${Math.floor((e.offsetX / gradientElement.clientWidth) * 100)}%`;
    }

    gradientElement.addEventListener('mousemove', move);
}