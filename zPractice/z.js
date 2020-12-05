var btn = document.querySelector(".myButton");

btn.addEventListener("click", function() {
  console.log("------");
  console.log("printing z3.js ---> z.js", divide(7, 7));
  console.log("------");
})

function sum(a, b) {
  return a + b;
}

// console.log("printing z2.js ---> z.js", multiply(7, 7));

// ---------------------------------------------------------------------------

// var btn = document.querySelector(".myButton");

// btn.addEventListener("click", function() {
//   console.log("printing function from Z.js", sum(2, 5));
// })

// function multiply(a, b) {
//   return a * b;
// }