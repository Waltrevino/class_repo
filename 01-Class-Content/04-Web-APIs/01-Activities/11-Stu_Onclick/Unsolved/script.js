const count = document.querySelector("#count");
const decreaseBtn = document.querySelector("#decrement");
const increaseBtn = document.querySelector("#increment");
var digit = 0;

decreaseBtn.addEventListener("click", function() {
  digit--;
  count.textContent = digit;
});

increaseBtn.addEventListener("click", function() {
  digit++;
  count.textContent = digit;
});