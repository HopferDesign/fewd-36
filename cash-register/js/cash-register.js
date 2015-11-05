// Structure
// ------------------------------------------------
var form    = document.querySelector("form");
var input   = document.querySelector("input");
var entries = document.querySelector(".entries");
var total   = document.querySelector(".total");

// Setup
// ------------------------------------------------
var totalValue = 0;



// Events
// ------------------------------------------------
form.addEventListener("submit", addItem);

function addItem(event) {
	event.preventDefault();

	var inputValue = parseFloat(input.value);
	totalValue = totalValue + inputValue;

	//Step 1 - create the elements
	var newItem = document.createElement("LI");

	//Step 2 - decorate the elements
	newItem.textContent = inputValue;
	total.textContent = totalValue;

	//Step 3 - insert the elements
	entries.appendChild(newItem);

}

