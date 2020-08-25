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

    startTimerFor = (seconds = this.duration, interval = 1) => {
        this.startTimer(seconds, interval);
        this.stopTimerAfter(seconds);
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


class SimpleTimer {
    constructor (duration = 60, interval = 1) {
        this.duration = parseInt(duration) + 1;
        this.timeLeft = parseInt(duration);
        this.interval = parseInt(interval);
        this.timer_01 = null;
        this.timer_02 = null;
    }
    perSecond = () => {
        this.timeLeft--
        console.log(this.timeLeft);
        return this.timeLeft;
    }
    startTimer = (duration = 60, interval = 1) => {
        this.timeLeft = parseInt(duration) + 1;
        this.interval = parseInt(interval);
        this.timer_01 = setInterval(this.perSecond, (1000*this.interval))
    }
    stopTimer = () => {
        clearInterval(this.timer_01);
        this.timeLeft = this.duration;
        this.timer_01 = null;
    }
    resetTimer = () => {
        this.stopTimer();
        this.startTimer();
    }
    resetTimerAfter = (seconds_01) => {
        let seconds = parseInt(seconds_01) + 1;
        setTimeout(()=> {            
            this.stopTimer();
            this.startTimer();
        }, (1000*seconds))
    }
    repeatTimerAfterEvery = (seconds_01) => {
        let seconds = parseInt(seconds_01) + 1;
        this.timer_02 = setInterval(()=> {            
            this.stopTimer();
            this.startTimer();
        }, (1000*seconds))
    }
    stopRepeating = () => {
        clearInterval(this.timer_01);
        clearInterval(this.timer_02);
        this.timeLeft = null;
    }
}

module.exports = {
    Timer,
    SimpleTimer
}