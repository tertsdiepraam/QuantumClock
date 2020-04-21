var clock_text;
var name_text;

var params = (new URL(document.location)).searchParams;
var target_date = new Date(params.get('date'));

window.onload = () => {
    name_text = document.getElementById("name")
    name_text.innerHTML = params.get("name")
    clock_text = document.getElementById("clock");
    update_time();
    setInterval(update_time, 1000);
}

function pad(text) {
    text = text.toString();
    if (text.length == 1) {
        return "0" + text;
    } else {
        return text;
    }
}

function update_time() {
    let current_time = new Date();
    let diff = target_date - current_time;
    let diffdate = new Date(diff);

    clock_text.innerHTML =  diffdate.getHours() + ":" + pad(diffdate.getMinutes()) + ":" + pad(diffdate.getSeconds());
}
