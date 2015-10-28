var number1 = document.querySelector(".first-number");
var number2 = document.querySelector(".second-number");
var sign = document.querySelector(".sign");
var button =document.querySelector(".compare");

button.addEventListener("click", calculate);

function calculate(event) {

	// get date from DOM
	var textInputVal1 = parseFloat(number1.value);
	var textInputVal2 = parseFloat(number2.value);
	console.log(textInputVal1);
	console.log(textInputVal2);

	// process data
	if(textInputVal1 > textInputVal2) {
		var r = ">";
		// console.log("greater than");
	}

	if(textInputVal1 < textInputVal2) {
		var r = "<";
		// console.log("less than");
	}

	if(textInputVal1 == textInputVal2) {
		var r = "=";
		// console.log("equal");
	}

// update page

	sign.textContent = r;

}
