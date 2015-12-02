//Structure
var form = document.querySelector("form");
var input = document.querySelector(".query");
var ul = document.querySelector(".results");

//Setup
var results;


//Events
form.addEventListener("submit", getMovies);


//Events Handlers
function getMovies(event) {
	event.preventDefault();
	console.log("getMovies");

	//create the url for the api request
	var search = input.value;
	var url = "http://www.omdbapi.com/?s=" + search;

	//make AJAX request
	jQuery.getJSON(url, updateMovies);


}

function getPoster(event) {
	//ToDo for Homework - build this function!
	
	//Step 1 -create
	var img = document.createElement("img");

	//Step 2 -attributes
	img.textContent = movie["Poster"];
	
	//Step 3 -append
	ul.appendChild(li);
}


//Update Page
function updateMovies(json) {
	//reset the page
	ul.innerHTML = "";
	input.value = "";

	var movies = json["Search"];

	movies.forEach(createMovieItem);
}

function createMovieItem(movie) {
	//Step 1 -create
	var li = document.createElement("li");
	var a = document.createElement("a");

	//Step 2 -attributes
	a.textContent = movie["Title"];
	var url = "http://www.imdb.com/title/" + movie["imdbID"];
	a.setAttribute("href", url);
	
	//Step 3 -append
	ul.appendChild(li);
	li.appendChild(a);
}

function updatePoster(json) {
	
}