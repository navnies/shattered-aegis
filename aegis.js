
const daysSinceTheReckoning = () => {
    const unixOfReckoning = 1544544000;
    let currentDateUnix = Math.floor(Date.now() / 1000);

    let difference = currentDateUnix - unixOfReckoning;

    let days = Math.floor(difference/60/60/24);
    difference -= days*60*60*24

    let hours = Math.floor(difference/60/60);
    difference -= hours*60*60

    let minutes = Math.floor(difference/60);
    difference -= minutes*60

    let seconds = difference;

    return `${days} days, 
        ${hours} hours, 
        ${minutes} minutes, and 
        ${seconds} seconds `;
}

const updateCounter = () => {
    const counter = document.getElementsByClassName('clock__text')[0];
    counter.innerHTML = daysSinceTheReckoning();
}

setInterval(() => {
    updateCounter()
}, 1000);