const userDistance = parseFloat(prompt("Dimmi quanti km vuoi percorrere"));

const userAge = parseInt(prompt("Dimmi quanti anni hai"));

let userPrice = userDistance * 0.21;

if (userAge < 18) {
  userPrice = userPrice - (userPrice * 20) / 100;
} else if (userAge > 65) {
  userPrice = userPrice - (userPrice * 40) / 100;
}

// far comparire in html gli elementi

document.getElementById("userDistance").innerHTML = userDistance + " Km";
document.getElementById("userAge").innerHTML = userAge + " anni";
document.getElementById("userPrice").innerHTML = userPrice.toFixed(2) + " €";
