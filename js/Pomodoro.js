// Pomodoro cycle:
/*
    1. work for 25mins
    2. short break for 5mins
    3. repeat 1,2 4 times
    4. work for 25mins
    5. long break for 20mins
    repeat until complete
*/
var CONFIG = {
    workMS: 60*1000*25,
    shortMS: 60*1000*5,
    longMS: 60*1000*20,
    workPerLongBreak: 4
}
var phase = 'Work';
var work = 'Work', sb = 'Short Break', lb = 'Long Break';
var workCount = 0;
var timerDis, statusDis;

// check if the user has completed 4 short breaks and is ready for a long break
function longBreakCheck() {
    if (workCount % CONFIG.workPerLongBreak === 0 && workCount !== 0) {
        return true;
    } else{
        return false;
    }
}

function completeWork() {
    workCount++;
    // wait until play button is clicked to start the break timer
    startBreak();
}

function completeBreak() {
    loadPhase(work);
}

function startBreak() {
    if (longBreakCheck()) {
        loadPhase(lb);
    } else {
        loadPhase(sb);
    }
}

function finishBreak() {
    loadPhase(work);
}

// helpers
function durFor(p) {
    switch(p) {
        case work: return CONFIG.workMS;
        case sb: return CONFIG.shortMS;
        case lb: return CONFIG.longMS;
        default: return CONFIG.workMS;
    }
}

function loadPhase(p) {
    phase = p;
    statusDis.textContent = labelFor(p);
    var done = (p == work) ? completeWork : completeBreak;
    setTimer(durFor(p), render, done);
}

function formatTime(t) {
    var totalSecs = Math.cell(t/1000);
    var mins = Math.floor(totalSecs/60);
    var secs = totalSecs % 60;

    var m = mins < 10 ? '0' + mins : mins;
    var s = secs < 10 ? '0' + secs : secs;

    return m + ':' + s;
}

function render(t) {
    timerDis.textContent = formatTime(t);
}

document.addEventListener('DOMContentLoaded', function () {
    timerDis = document.querySelector('.timer h2');
    statusDis = document.querySelector('.status h2');

    document.getElementById('startButt').addEventListener('click', function () {startTimer();});
    document.getElementById('pauseButt').addEventListener('click', function () {pauseTimer();});
    document.getElementById('stopButt').addEventListener('click', function () {
        pauseTimer();
        loadPhase(phase);
    });
    document.getElementById('resetButt').addEventListener('click', function () {
        resetTimer();
        workCount = 0;
        loadPhase(work);
    });
});