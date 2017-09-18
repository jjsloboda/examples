// Sets the clock string in the HTML to the current time
function set_current_time() {
  // get the time right now
  const right_now_time = new Date(Date.now());

  // extract each time segment (hours, minutes, seconds)
  const hours = right_now_time.getHours();
  const minutes = right_now_time.getMinutes();
  const seconds = right_now_time.getSeconds();

  // convert each segment to hexadecimal
  let hex_hours = hours.toString(16);
  let hex_minutes = minutes.toString(16);
  let hex_seconds = seconds.toString(16);

  // make sure to add a leading "0" if needed
  // otherwise the converted numbers will be "e" instead of "0e" for example
  if (hex_hours.length < 2) hex_hours = "0" + hex_hours;
  if (hex_minutes.length < 2) hex_minutes = "0" + hex_minutes;
  if (hex_seconds.length < 2) hex_seconds = "0" + hex_seconds;

  // set the hex clock string to the new time
  const clockstring = "#" + hex_hours + hex_minutes + hex_seconds;
  const clock = document.getElementById('clock');
  clock.innerText = clockstring;

  // set the background color of the page to this hex string
  document.body.style.backgroundColor = clockstring;
}

// update the clock every half a second (to account for processor latency)
setInterval(set_current_time, 500);
