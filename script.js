function bgChanger() {
    let hext = document.querySelector('.hexText')

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    let hex = '0123456789abcdef';
    let result = '#';
    for (let i=0; i<6; i++){
        result += hex[getRandomInt(hex.length)];
    }
    document.body.style.background = result;
    hext.innerText = result;
}