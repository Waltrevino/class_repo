var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");
var inputs = document.querySelector(".inputs");

var totalSeconds = 0;
var secondsElapsed = 0;
var interval;
var status = "Working";

function startTimer() {
  setTiempo();
  // Write code to start the timer here
  if (totalSeconds > 0) {
    interval = setInterval(() => {
      secondsElapsed++;
      renderTiempo();
    }, 1000);
  }
}

function setTiempo() {
  var minutos;
  if (status === "Working") {
    minutos = workMinutesInput.value.trim();
  } else {
    minutos = restMinutesInput.value.trim();
  }
  clearInterval(interval);
  totalSeconds = minutos * 60;
  console.log(totalSeconds);

}

function renderTiempo() {
  minutesDisplay.textContent = getMinutes();
  secondsDisplay.textContent = getSeconds();

  if (secondsElapsed >= totalSeconds) {
    if (status === "Working") {
      alert("Rest up!");
    } else {
      alert("Get back to work!")
    }
    stopTimer();
  }
}

function getMinutes() {
  var secondsLeft = totalSeconds - secondsElapsed;
  var minutesLeft = Math.floor(secondsLeft / 60);
  var formattedMinutes;
  if (minutesLeft < 10) {
    formattedMinutes = "0" + minutesLeft;
  } else {
    formattedMinutes = minutesLeft;
  }
  return formattedMinutes;
}

function getSeconds() {
  var secondsLeft = (totalSeconds - secondsElapsed) % 60;
  var formattedSeconds;
  if (secondsLeft < 10) {
    formattedSeconds = "0" + secondsLeft;
  } else {
    formattedSeconds = secondsLeft;
  }
  return formattedSeconds;
}

function stopTimer() {
  secondsElapsed = 0;
  setTiempo();
  renderTiempo();
}

function toggleStatus(event) {
  event.preventDefault();
  console.log(status);

  if (status === "Working") {
    status = "Resting";
  } else if (status === "Resting") {
    status = "Working";
  }
  statusSpan.textContent = status;

  secondsElapsed = 0;
  setTiempo();
  renderTiempo();
}

function pause() {
  clearInterval(interval);
  renderTiempo();
}

function setPreferences() {
  localStorage.setItem("preferences", JSON.stringify({
    workMinutes: workMinutesInput.value.trim(),
    restMinutes: restMinutesInput.value.trim()
  }))
}

function getPreferences() {
  var preferences = JSON.parse(localStorage.getItem("preferences"));
  workMinutesInput.value = preferences.workMinutes;
  restMinutesInput.value = preferences.restMinutes;
  console.log(preferences);
  setTiempo();
  renderTiempo();
}

getPreferences();

playButton.addEventListener("click", startTimer);
workMinutesInput.addEventListener("keydown", statusToggle);
restMinutesInput.addEventListener("keyup", statusToggle);
statusToggle.addEventListener("change", toggleStatus);
pauseButton.addEventListener("click", pause);
stopButton.addEventListener("click", stopTimer);
inputs.addEventListener("change", setPreferences);
inputs.addEventListener("keydown", setPreferences);