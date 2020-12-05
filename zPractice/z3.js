var btn = document.querySelector(".myButton");

btn.addEventListener("click", function() {
  console.log("------");
  console.log("PRINTING z.js ---> z3.js", multiply(7, 7));
  console.log("------");
})

function divide(a, b) {
  return a / b;
}

// ---------------------------------------------------------------------------

// var btn = document.querySelector(".myButton");

// btn.addEventListener("click", function() {
//   console.log("printing z2.js <--- z.js", multiply(7, 7));
// })

// function sum(a, b) {
//   return a + b;
// }

// console.log("z.js <--- z2.js: ", multiply(7, 7));