// Structure
// ----------------------------------------------
var pictures = document.querySelector(".pictures");
var names = document.querySelector(".names");
var feed = document.querySelector(".feed");

// Events
// ----------------------------------------------


// Setup
// ----------------------------------------------
var cat = {
	picture: "baby.jpg",
	name: "Daisy",
};


// Event handlers
// ----------------------------------------------
window.addEventListener("load", setupPage);

// Update page functions
// ----------------------------------------------

function setupPage() {
	mockPictures.forEach(createPicture);
	mockNames.forEach(createName);
}

function createPicture(item) {

	//Step 1 - Create Elements
	var li = document.createElement("li");
	var img = document.createElement("img");

	//Step 2 - Decorate Elements
	img.setAttribute("src", "images/" + item);

	//Step 3 - Insert in DOM
	li.appendChild(img);
	pictures.appendChild(li);
}

function createName(item) {

	//Step 1 - Create Elements
	var li = document.createElement("li");

	//Step 2 - Decorate Elements
	li.textContent = item;

	//Step 3 - Insert in DOM
	names.appendChild(li);
}

function createPost(item) {

	//Step 1 - Create Elements
	var li = document.createElement("li");
	var p = document.createElement("p");
	var img = document.createElement("img");

	//Step 2 - Decorate Elements
	p.textContent = item.name;
	img.setAttribute("src", "images/" + item.picture);

	//Step 3 - Insert in DOM
	li.appendChild(p);
	li.appendChild(img);
	feed.appendChild(li);
}