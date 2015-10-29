var tempF = document.querySelector(".input-box-1");
var tempC = document.querySelector(".input-box-2");
var buttonF = document.querySelector(".convertF");
var buttonC = document.querySelector(".convertC");


buttonF.addEventListener("click", calcFahrenheitToCelcius);
buttonC.addEventListener("click", calcCelciusToFahrenheit);

function calcFahrenheitToCelcius(event) {
  if (tempF.value.length > 0) {
    tempC.value = (tempF.value-32)*(5/9);
  } else {
    tempC.value = ' ';
  }
}

function calcCelciusToFahrenheit(event) {
  if (tempC.value.length > 0) {
    tempF.value = tempC.value*9/5+32;
  } else {
    tempF.value = ' ';
  }
}
