var clock_text;
var target_date = new Date("December 20, 2018 16:00:00");

window.onload = () => {
    clock_text = document.getElementById("clock");
    update_time();
    setInterval(update_time, 1000);
}

function update_time() {
    let current_time = new Date();
    let months = target_date.getMonth() - current_time.getMonth();
    let days = target_date.getDate() - current_time.getDate();
    let month_text = "";
    let day_text = "";
    if (months > 0) {
        if (months > 1) {
            month_text = months + " months ";
        } else {
            month_text = months + " month ";
        }
    }
    if (days > 0) {
        if (days > 1) {
            day_text = days + " days ";
        } else {
            day_text = days + " day ";
        }
    }
    let [hours, minutes, seconds] = [0,0,0];
    seconds += target_date.getSeconds() - current_time.getSeconds()
    if (seconds < 0) {
        seconds += 60;
        minutes -= 1;
    }
    minutes += target_date.getMinutes() - current_time.getMinutes();
    if (minutes < 0) {
        minutes += 60;
        hours -= 1;
    }
    hours   += target_date.getHours() - current_time.getHours();
    clock_text.innerHTML = month_text + day_text + hours + ":" + minutes + ":" + seconds;
}