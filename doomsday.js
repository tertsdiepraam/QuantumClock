var clock_text;
var target_date = new Date("December 20, 2018 16:00:00");

window.onload = () => {
    clock_text = document.getElementById("clock");
    update_time();
    setInterval(update_time, 1000);
}

function pad(text) {
    text = text.toString()
    if (text.length == 1) {
        return "0" + text
    } else {
        return text
    }
}

function update_time() {
    let current_time = new Date();
    let diff = target_date - current_time;
    let days = Math.floor(diff / 1000 / 60 / (60 * 24));
    let day_text;
    if (days == 0) {
        day_text = "day"
    } else {
        day_text = "days"
    }
    let diffdate = new Date(diff);

    clock_text.innerHTML = days + " " + day_text + "<br>" + diffdate.getHours() + ":" + pad(diffdate.getMinutes()) + ":" + pad(diffdate.getSeconds());
}