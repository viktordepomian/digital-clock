function outputTime(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let time = document.querySelector('.time');
    
    let fullTime = `${h}:${m}:${s}`;
    time.textContent = fullTime;

    setTimeout(outputTime, 1000);
}

outputTime();