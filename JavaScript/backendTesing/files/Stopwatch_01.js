const stopWatch = (seconds_01, loops_01) => {
    let seconds = parseInt(seconds_01);
    seconds = (seconds + 1);
    let loops = parseInt(loops_01);
    let loopsLeft = loops;
    let timeLeft = seconds;
    let perSecond = ()=> {
        timeLeft--;
        console.log(timeLeft);
        return timeLeft;
    }
    let perLoop = () => {
        clearInterval(timer_01);
        timeLeft = seconds;
        timer_01 = setInterval(perSecond, 1000);
        loopsLeft--;
        console.log("Loops Left " + loopsLeft);
        return loopsLeft;
    }
    let timer_01 = setInterval(perSecond, 1000);
    let timer_02 = setInterval(perLoop, (1000*seconds));
    setTimeout(()=> {
        clearInterval(timer_01);
        clearInterval(timer_02);
    }, (1000*seconds*loops));
}

module.exports = {
    stopWatch
}