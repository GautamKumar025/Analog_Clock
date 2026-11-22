// Calculate of hour
// 12hour = 360°
// 1hour = 360° / 12 = 30
// h hours = 30°h +


// 60min = 30°
// 1min = 30 / 60 = 1/2°
// m mins = (1/2)m


// Calculate of min
// 60min = 360°
// 1min = 360/60 = 6°
// m min = 6m


// Calculate of sec
// 60sec = 360°
// 1sec = 360/60 = 6°
// s sec = 6s


let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime(){
    let date = new Date();

    // getting hour , mins, secs from date

    let hh = date.getHours()
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation  = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);
