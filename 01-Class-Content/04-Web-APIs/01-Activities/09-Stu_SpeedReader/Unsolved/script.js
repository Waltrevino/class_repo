var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var palabras = poem.split(" ");
var elMessageContainer = document.createElement("div");
var elMessageHeader = document.createElement("h1");
var elPoemContainer = document.createElement("p")
var segundos = 5;
var i = 0;

var milliSegundos = prompt("how many milliSegundos?");

document.body.appendChild(elMessageHeader);

function prepareRead() {
  var timerInterval = setInterval(function() {
    segundos--;
    elMessageHeader.textContent = segundos + " left..."
    if (segundos === 0) {
      speedRead();
      elMessageHeader.textContent = "you did it!";
      clearInterval(timerInterval);
    }
  }, 1000)
}

function speedRead() {
  elMessageContainer.setAttribute("style", "width: 100%; height: 100vh; border: solid red 5px");
  document.body.appendChild(elMessageContainer);
  elMessageContainer.appendChild(elPoemContainer);

  // Print words to the screen one at a time.
  var timerInterval = setInterval(() => {
    if (palabras[i] === undefined) {
      clearInterval(timerInterval);
    } else {
      elPoemContainer.textContent = palabras[i];
      i++;

    }

  }, milliSegundos);


  console.log(palabras);

}

prepareRead();