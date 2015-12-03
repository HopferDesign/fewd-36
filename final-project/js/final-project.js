$(document).ready(function(){
  $(".carousel").slick({
    centerMode: true,
	centerPadding: '60px',
	slidesToShow: 1,
	dots: true,
	infinite: true,
	speed: 500,
	fade: true,
	cssEase: 'linear',
	adaptiveHeight: true,
	responsive: [
		{
			breakpoint: 768,
			settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 1,
			swipe: true,
			}
		},
		{
			breakpoint: 480,
			settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 1,
			swipe: true,
			}
		}
	]
})

});

var $grid = $('.grid').isotope({
  // options
  itemSelector: ".project",
  layoutMode: 'fitRows'
});

// Isotope filter items on button click
$('.filter-project-group').on( 'click', '.menu-item', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
  hideProject();
});

//Isotope Filtering

$grid.isotope({ filter: '.interactive' });

$grid.isotope({ filter: '.infographic' });

$grid.isotope({ filter: '.branding' });

$grid.isotope({ filter: '.publication' });

// show all items
$grid.isotope({ filter: '*' });



//1. Structure
var project = document.querySelector(".project");
var carousel = document.querySelector(".carousel");


// project types
var publication = document.querySelector(".publication");
var interactive = document.querySelector(".interactive");
var infographic = document.querySelector(".infographic");
var branding = document.querySelector(".branding");

//project names
var jbdt = document.querySelector(".jbdt");
var cisco = document.querySelector(".cisco");


//Setup




//2. Events
$grid.on("click", showProject)

	//Events Handlers
function showProject(e) {

	if (e.target.tagName != "IMG") {
		return;
	}

	var li = e.target.parentElement;

	var connect = li.getAttribute("data-project");

	console.log(connect);

	hideProject();

	var projectDetails = document.querySelector("." + connect);
	if(projectDetails) {

		projectDetails.classList.add("show");

		$('.carousel').slick('setPosition');

	}

}

function hideProject() {
	var last = document.querySelector(".show");
	if(last) {
		last.classList.remove("show");
	}
}

//3. Update Page

	
	//Step 1 -create
		

	//Step 2 -attributes
		
		
	//Step 3 -append
