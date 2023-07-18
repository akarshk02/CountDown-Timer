var daysE1 = document.getElementById("days");
var hoursE1 = document.getElementById("hours");
var minutesE1 = document.getElementById("minutes");
var secondsE1 = document.getElementById("seconds");

var newYear="14 June 2024";

function countdown(){
    var newYearDate = new Date(newYear);
    var currentDate = new Date();

    var totalSeconds = (newYearDate - currentDate)/1000;

    var days = Math.floor(totalSeconds/3600/24);
    var hours = Math.floor(totalSeconds/3600 %24);
    var minutes = Math.floor(totalSeconds/60) % 60;
    var seconds = Math.floor(totalSeconds) % 60;
     
    daysE1.innerHTML = days;
    hoursE1.innerHTML = formatTime(hours);
    minutesE1.innerHTML = formatTime(minutes);
    secondsE1.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);

