$(document).ready(function(e){
    $('.search-panel .dropdown-menu').find('a').click(function(e) {
		e.preventDefault();
		console.log('click the country');
		var concept = $(this).html();
		$('.search-panel span#search_concept').html(concept);

		// $('#weather-btn').click(function(e){
		// e.preventDefault();
		// console.log('click the weather-btn');
		// $('#weather-card').css('display', 'none');
		// $('#weather-list').css('display','block');
		// });

		$('#weather-list').find('button').click(function(e){
		e.preventDefault();
		$('#weather-card').css('display', 'block');
		$('#weather-list').css('display','none');
		});
});
});

document.getElementById("main-part").addEventListener("click", function(e) {
	// e.target is the clicked element!
	// If it was a list item
	if(e.target && e.target.id == "weather-card-btn") {
		// List item found!  Output the ID!
		console.log('click the weather-btn');
		$('#weather_card').css('display', 'none');
		$('#weather-list').css('display','block');
	};

	if(e.target && e.target.id == 'weather-list-btn') {

		$('#weather_card').css('display', 'block');
		$('#weather-list').css('display','none');
	}
});