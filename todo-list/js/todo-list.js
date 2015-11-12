//Structure
var task = document.querySelector(".newtask");
var date = document.querySelector(".taskdate");
var button = document.querySelector(".button");
var cbox = document.querySelector(".checkbox");
var list = document.querySelector(".tasks");

button.addEventListener("click", addTask);

//Event Handler function
function addTask(event) {
	// console.log('addTask');

	//Step 1 - create the elements
	var li = document.createElement("LI");
	var input = document.createElement("INPUT");
	var label = document.createElement("LABEL");

	//Step 2 - decorate the elements
	label.textContent = task.value + " " + date.value;
	input.setAttribute("type", "checkbox");

	//Step 3 - insert the elements
	list.appendChild(li);
	li.appendChild(input);
	li.appendChild(label);
}
