var clock_text;
var name_text;

var params = (new URL(document.location)).searchParams;
var target_date = new Date(params.get('date'));

Date.daysBetween = function( date1, date2 ) {
  //Get 1 day in milliseconds
  var one_day=1000*60*60*24;

  // Convert both dates to milliseconds
  var date1_ms = date1.getTime();
  var date2_ms = date2.getTime();

  // Calculate the difference in milliseconds
  var difference_ms = date2_ms - date1_ms;

  // Convert back to days and return
  return Math.round(difference_ms/one_day);
}

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

    clock_text.innerHTML = Date.daysBetween(current_time, target_date) + " days " + diffdate.getHours() + ":" + pad(diffdate.getMinutes()) + ":" + pad(diffdate.getSeconds());
}
