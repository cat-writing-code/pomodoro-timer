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
    workMS: 60*100*25,
    shortMS: 60*100*5,
    longMS: 60*100*25,
    workPerLongBreak: 4
}
var phase = 'Work';
var workCount = 0;
var timerDis, statusDis;

// check if the user has completed 4 short breaks and is ready for a long break
function longBreakCheck() {
    if (workCount % longBreak === 0 && workCount !== 0) {
        return true;
    } else{
        return false;
    }
}

function completeWork() {
    workCount++;
    // show the break timer 

    // wait until play button is clicked to start the break timer
    startBreak();
}

function startBreak() {
    if (longBreakCheck()) {

    } else {

    }
}

// helpers
function durFor(p) {

}

function labelFor(p) {

}

function loadPhase(p) {
    phase = p;
    statusDis.textContent = labelFor(p);
    setTimer(durFor(p), WebGL2RenderingContext, onPhaseCom);
}

function formatTime(t) {

}

function render(t) {
    
}

// 
document.addEventListener('DOMContentLoaded', function () {
    timerDis = document.querySelector('.timer h2');
    statusDis = document.querySelector('.status h2');

    document.getElementById('startButt').addEventListener('click', function () {startTimer();});
    document.getElementById('pauseButt').addEventListener('click', function () {pauseTimer();});
    document.getElementById('stopButt').addEventListener('click', function () {
        pauseTimer();
        loadPhase(phase);
    });
    document.getElementById('resetButt').addEventListener('click', function () {resetTimer();});
});