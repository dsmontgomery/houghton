// below is countdown

// set the date we're counting down to
var target_date = new Date("Nov 28, 2014").getTime();

// set initial date

var initial_date = new Date("Aug 23, 2014").getTime();

var current_date = new Date().getTime();

var time_gone = (current_date - initial_date) / (target_date - initial_date);

// variables for time units
var days, hours, minutes, seconds;
 
// get tag element
var countdown = document.getElementById("countdown");
 
// update the tag with id "countdown" every 1 second
setInterval(function () {
 
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
     
    // format countdown string + set tag value
    countdown.innerHTML = days + "d, " + hours + "h, "
    + minutes + "m, " + seconds + "s";  
 
}, 1000);

//below is canvas


var c = document.getElementById("doomsday");
var ctx = c.getContext("2d");
var rdn = time_gone * .5;

// hour hand

ctx.fillStyle = "#222";
ctx.beginPath();
ctx.moveTo(344,222)
ctx.lineTo(394,222);
ctx.lineTo(394,394);
ctx.lineTo(344,344);
ctx.closePath();
ctx.fill();

// minute hand
ctx.strokeStyle = "#222";
ctx.beginPath();
ctx.moveTo(369,369);
ctx.lineTo(369 - 169 * Math.cos(rdn * Math.PI), 369 - 169 * Math.sin(rdn * Math.PI));
ctx.lineTo(369 + 169 * Math.cos(rdn * Math.PI), 369 + 169 * Math.sin(rdn * Math.PI));
ctx.lineWidth=50;
ctx.stroke();

// minute hand mask

ctx.fillStyle = "#fff";
ctx.beginPath();
ctx.moveTo(394,222);
ctx.lineTo(400,222);
ctx.lineTo(400,400);
ctx.lineTo(344,400);
ctx.lineTo(344,394);
ctx.lineTo(394,394);
ctx.closePath();
ctx.fill();

// face
ctx.beginPath();
ctx.arc(394, 394, 370, 1 * Math.PI, 1.5 * Math.PI);
ctx.lineWidth = 50;
ctx.stroke();

//tick marks
ctx.fillStyle = "#222";
ctx.beginPath();
ctx.arc(369,121,31,0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(246,158,31,0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(158,246,31,0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(121,369,31,0, 2 * Math.PI);
ctx.fill();
