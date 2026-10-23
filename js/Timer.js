var tickHandel = null;
var endTime = 0;
var remainingMS = 0;
var onTick = function() {};
var onDone = function() {};

// set the timer with a fresh countdown
function setTimer(ms, ot, od) {
    pauseTimer();
    remainingMS = ms;
    onTick = ot || function () {};
    onDone = od || function () {};
    onTick(remainingMS);
}


// when play is clicked, start the timer
function startTimer() {
    // check if timer's already running
    if (tickHandel !== null) {
        return;
    }

    // check ig there's nothing to countdown to
    if (remainingMS <= 0) {
        return;
    }

    endTime = Date.now() + remainingMS;
    tickHandel = setInterval(function () {
        remainingMS = Math.max(0, endTime-Date.now());
        onTick(remainingMS);

        if (remainingMS == 0) {
            clearInterval(tickHandel);
            tickHandel = null;
            onDone();
        }

    }, 100);

}

// when stop is clicked, stop the timer
function stopTimer() {
    if (tickHandel !== null) {
        clearInterval(tickHandel);
        tickHandel = null;
    }

    remainingMS = 0;
}

// when pause is clicked, pause the timer
function pauseTimer() {
    // check if timer's not running
    if (tickHandel == null) {
        return;
    }

    clearInterval(tickHandel);
    tickHandel = null;
    remainingMS = Math.max(0, endTime-Date.now());
    onTick(remainingMS);
}

// when reset is clicked, reset the timer
function resetTimer() {
    if (tickHandel !== null) {
        clearInterval(tickHandel);
        tickHandel = null;
    }

    remainingMS = 0;
    onTick(remainingMS);
}