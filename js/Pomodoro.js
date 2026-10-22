// Pomodoro cycle:
/*
    1. work for 25mins
    2. short break for 5mins
    3. repeat 1,2 4 times
    4. work for 25mins
    5. long break for 20mins
    repeat until complete
*/
var workCount = 0;
var longBreak = 4;

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