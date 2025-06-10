"use strict";


// Variables
const time = document.getElementById("time");

const mins_span = document.getElementById("mins");
const secs_span = document.getElementById("secs");
const msecs_span = document.getElementById("msecs");

const lap_reset_btn = document.getElementById("lap_reset_btn");
const start_stop_btn = document.getElementById("start_stop_btn");

const laps_wrapper = document.getElementById("laps_wrapper");

var mins = 0;
var secs = 0;
var msecs = 0;


// Interval Initialization
var timer;


// Functions
function start_stop(){
    if (start_stop_btn.innerText == "Start"){
        timer = setInterval(function(){
            msecs++;
            if (msecs == 100){
                msecs = 0;
                secs++;
            }
            if (secs == 60){
                secs = 0;
                mins++;
            }
            if (mins == 60){
                mins = 0;
            }
            if (msecs < 10){
                msecs_span.innerHTML = "0" + msecs.toString();
            }else {
                msecs_span.innerHTML = msecs.toString();
            }
            if (secs < 10){
                secs_span.innerHTML = "0" + secs.toString();
            }else {
                secs_span.innerHTML = secs.toString();
            }
            if (mins < 10){
                mins_span.innerHTML = "0" + mins.toString();
            }else {
                mins_span.innerHTML = mins.toString();
            }
        }, 10);
        start_stop_btn.innerText = "Stop";
        start_stop_btn.classList.add("stop");
        lap_reset_btn.innerText = "Lap";
    }
    else{
        clearInterval(timer);
        start_stop_btn.innerText = "Start";
        start_stop_btn.classList.remove("stop");
        lap_reset_btn.innerText = "Reset";
    }
}

function create_lap_or_reset(){
    if (lap_reset_btn.innerText == "Lap"){
        let lap_text = time.innerText;

        let lap = document.createElement("div");
        lap.className = "lap";
        laps_wrapper.prepend(lap);
        
        let lap_num = document.createElement("span");
        lap_num.className = "lap_num";
        lap_num.innerText = "Lap " + laps_wrapper.childElementCount;
        lap.appendChild(lap_num);

        let lap_time = document.createElement("span");
        lap_time.className = "lap_time";
        lap_time.innerText = lap_text;
        lap.appendChild(lap_time);
    }
    else{
        mins = 0;
        secs = 0;
        msecs = 0;
        mins_span.innerText = "00";
        secs_span.innerText = "00";
        msecs_span.innerText = "00";
        laps_wrapper.innerHTML = "";
    }
}


// Event Listeners
start_stop_btn.onclick = start_stop;
lap_reset_btn.onclick = create_lap_or_reset;