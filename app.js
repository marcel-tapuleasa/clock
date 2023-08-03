const secondhands = document.querySelectorAll('.second-hand');
const minhands = document.querySelectorAll('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const londonHand = document.querySelector('.london-hour-hand');
const tokioHand = document.querySelector('.tokio-hour-hand');


function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDeg = ((seconds / 60) * 360) + 90;
    for(let secondhand of secondhands ) {
    secondhand.style.transform = `rotate(${secondsDeg}deg)`}

    const min = now.getMinutes();
    const minDeg = ((min / 60) * 360) + 90;
    for(let minhand of minhands) {    
    minhand.style.transform = `rotate(${minDeg}deg)`;}

    const hour = now.getHours();
    const hourDeg = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDeg}deg)`
    
    const londonHourDeg = hourDeg - 60
    londonHand.style.transform = `rotate(${londonHourDeg}deg)`

    const tokioHourDeg = hourDeg + 210
    tokioHand.style.transform = `rotate(${tokioHourDeg})`
}

setInterval(setDate, 1000);
setDate();