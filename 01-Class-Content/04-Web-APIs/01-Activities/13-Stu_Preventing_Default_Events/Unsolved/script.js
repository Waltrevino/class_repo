var subtotal = document.querySelector("#xxx");
var tip_percent = document.querySelector("#tip-percent");
var lblTipAmount = document.querySelector("#tip-amount");
var lblTotal = document.querySelector("#total");
var btnCalulateTotal = document.querySelector("#submit");
var frm = document.querySelector("form");
var total = 0;

btnCalulateTotal.addEventListener("click", calculateAmounts);




//   var tip_amount = subtotal * tip_percent;
//   lblTipAmount.textContent = tip_amount;
//   total = subtotal + tip_amount;
//   lblTotal.textContent = total;


function calculateAmounts(event) {
  event.preventDefault();

  lblTipAmount.textContent = (parseFloat(subtotal.value) * parseFloat(tip_percent.value)).toFixed(2);
  lblTotal.textContent = (parseFloat(subtotal.value) + (parseFloat(subtotal.value) * parseFloat(tip_percent.value))).toFixed(2);

  console.log(subtotal.value);

}