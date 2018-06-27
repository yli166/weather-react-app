$(document).ready(function(e){
    $('.search-panel .dropdown-menu').find('a').click(function(e) {
		e.preventDefault();
		console.log('click country')
		var param = $(this).attr("href").replace("#","");
		var concept = $(this).html();
		$('.search-panel span#search_concept').html(concept);
		$('.input-group #search_param').val(param);
	});


	$('#weather-list').find('button').click(function(e){
		e.preventDefault();
	$('#weather-card').css('display', 'block');
	$('#weather-list').css('display','none');
})
});


$('#weather-btn').click(function(){
	console.log('click the button');
	$('#weather-card').css('display', 'none');
	$('#weather-list').css('display','block');
});


