//Structure
//-----------------------------------
// var color1 = document.querySelector(".honeydew");
// var color2 = document.querySelector(".lawngreen");
// var color3 = document.querySelector(".aqua");
// var color4 = document.querySelector(".lightcoral");

var list = document.querySelector("ul");

//Events
//-----------------------------------
// color1.addEventListener("click", changeColor);
// color2.addEventListener("click", changeColor);
// color3.addEventListener("click", changeColor);
// color4.addEventListener("click", changeColor);

list.addEventListener("click", changeColor)


//Event handler functions
//-----------------------------------
function changeColor(event) {
	console.log("changeColor");
	console.log(event.target);
	console.log(event.target.tagName);

	// Return early unless swatch was clicked
	if (event.target.tagName == "UL") {
		return;
	}

	var swatch = event.target;
	var color = swatch.className;
	
	var body = document.querySelector("body");
	body.className = color;

	var name = document.querySelector("span");
	name.textContent = color;

	// Method #2
	// body.setAttribute("class", color);
}



var theme = {
	color: "honeydew"
}

localStorage.setItem("theme", JSON.stringify(theme))

var savetheme = JSON.parse(localStorage.getItem("theme"));