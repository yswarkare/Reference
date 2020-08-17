// let timeLeft = 10
// let timer = setInterval (()=> {
//     timeLeft = timeLeft - 1
//     console.log(timeLeft)
// }, 1000);
// setTimeout(() => {
//     clearInterval(timer);
// }, 10000);

class Timer {
    constructor (duration, interval = 1) {
        this.duration = duration;
        this.timeLeft = duration;
        this.interval = parseInt(interval);
        this.timer_01 = null;
        this.timer_02 = null;
        this.seconds = null;
    }
    startTimer = (seconds = this.duration, interval = 1) => {
        this.timeLeft = parseInt(seconds);
        this.interval = parseInt(interval);
        this.timer_01 = setInterval(()=>{
            this.timeLeft = this.timeLeft - 1;
            console.log(this.timeLeft);
            return this.timeLeft;
        },(1000*this.interval));
    }
    stopTimer = () => {
        clearInterval(this.timer_01);
        this.timeLeft = this.duration;
        this.timer_01 = null;
    }

    stopTimerAfter = (seconds_01) => {
        let seconds = parseInt(seconds_01)
        setTimeout(()=> {
            this.stopTimer();
        }, (1000*seconds));
    }

    resetTimer = (seconds = this.duration, interval = 1) => {
        this.stopTimer();
        this.startTimer(seconds, interval);
    }
    resetTimerFor = (seconds = this.duration, interval = 1) => {
        this.stopTimer();
        this.startTimer(seconds, interval);
        this.stopTimerAfter(seconds);
    }
    startTimerFor = (seconds = this.duration, interval = 1) => {
        this.startTimer(seconds, interval);
        this.stopTimerAfter(seconds);
    }
    repeatTimer = (seconds_01) => {
        let seconds = parseInt(seconds_01);
        this.timer_02 = setInterval(()=> {
            this.startTimer(seconds)
        }, (1000*seconds))
    }
    stopRepeatTimer = () => {
        clearInterval(this.timer_02);
        this.timer_02 = null;
    }
    repeatTimerFor = (seconds_01, loops_01) => {
        let seconds = parseInt(seconds_01);
        let loops = parseInt(loops_01);
        this.timer_02 = setInterval(()=> {
            this.resetTimerFor(seconds);
        }, (1000*seconds))
        setTimeout(()=> {
            this.stopRepeatTimer();
        }, (1000*seconds*loops))
    }
}

let myTimer = new Timer(10, 1);


myTimer.repeatTimerFor(5, 5);

setTimeout(()=>{
    myTimer.stopTimer();
}, 30000);

