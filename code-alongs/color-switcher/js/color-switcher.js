//Structure
//-----------------------------------
var color1 = document.querySelector(".honeydew");
var color2 = document.querySelector(".lawngreen");
var color3 = document.querySelector(".aqua");
var color4 = document.querySelector(".lightcoral");

//Events
//-----------------------------------
color1.addEventListener("click", changeColor);
color2.addEventListener("click", changeColor);
color3.addEventListener("click", changeColor);
color4.addEventListener("click", changeColor);

//Event handler functions
//-----------------------------------
function changeColor(event) {
	var swatch = event.target;
	var color = swatch.className;
	
	var body = document.querySelector("body");
	body.className = color;

	var name = document.querySelector("span");
	name.textContent = color;

	// Method #2
	// body.setAttribute("class", color);
}

