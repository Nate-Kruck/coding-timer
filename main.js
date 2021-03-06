const timer = document.getElementById('stopwatch');
const elapsed = document.getElementById('elapsed');

let hr = 0;
let min = 0;
let sec = 0;
let stoptime = true;
let startTime, endTime;

function startTimer() {
    startTime = timer.innerHTML;
    if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}

function stopTimer() {
    endTime = timer.innerHTML;
    let elapsed = endTime - startTime;

    elapsed /= 1000;

    let seconds = Math.round(elapsed);
    console.log(seconds + " seconds");

    if (stoptime == false) {
        stoptime = true;
    }

    localStorage.setItem(startTime, endTime);
    localStorage.getItem(endTime);
}

function timerCycle() {
    if (stoptime == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec = sec + 1;

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
            min = '0' + min;
        }
        if (hr < 10 || hr == 0) {
            hr = '0' + hr;
        }

        timer.innerHTML = hr + ':' + min + ':' + sec;
        elapsed.innerHTML = hr + ':' + min + ':' + sec;

        setTimeout("timerCycle()", 1000);
        setTimeout(function() {alert("Time for a break") }, 3600000);
    }
}

function resetTimer() {
    timer.innerHTML = "00:00:00"
    stoptime = true;
    hr = 0;
    min = 0;
    sec = 0;
}
