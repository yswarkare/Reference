const startTimer = (function_01, interval = 1) => {
    return setInterval(function_01, (1000*interval));
}

const stopTimer = (timer_01) => {
    clearInterval(timer_01);
}

const perSecond = (timeLeft) => {
    timeLeft--;
    return timeLeft;
}

const perLoop = () => {
    
}

const timer = (duration_01 = 60, loops_01 = 1) => {
    let duration = parseInt(duration_01);
    let timeLeft = (duration + 1);
    let loops = parseInt(loops_01);
    let timer_01 = null;
    let timer_02 = null;
}

module.exports = {
    timer
}