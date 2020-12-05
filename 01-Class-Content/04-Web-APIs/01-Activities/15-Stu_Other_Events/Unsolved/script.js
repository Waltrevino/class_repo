var eventType = document.querySelector("#event-type");
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");
var lblKey = document.querySelector("#key");
var lblCode = document.querySelector("#code");
var lblStatus = document.querySelector("#status");
var lblX = document.querySelector("#x");
var lblY = document.querySelector("#y");

function toggleDisplay(event) {
  var value = event.target.value;
  if (value === "keydown") {
    mouseEventsEl.classList.add("hide");
    keyEventsEl.classList.remove("hide");
  } else {
    mouseEventsEl.classList.remove("hide");
    keyEventsEl.classList.add("hide");
  }
}

eventType.addEventListener("change", toggleDisplay);
document.addEventListener("click", detectClicks);
document.addEventListener("keydown", detectKeydown);
document.addEventListener("keyup", detectKeyup);

function detectClicks(event) {
  var x = event.clientX;
  var y = event.clientY;
  lblX.textContent = x;
  lblY.textContent = y;

}

function detectKeydown(event) {
  var key = event.key;
  var code = event.code;
  lblKey.textContent = key;
  lblCode.textContent = code;
  lblStatus.textContent = event.target.textContent;
}

function detectKeyup() {
  lblStatus.textContent = "KEYUP Eventtttttt";
}