var about = $('#aboutUsDiv');
var contact = $('#contactDiv');
var home = $('#homeDiv');
var services = $('#ourServicesDiv');
var order = $('#orderSubmitDiv');


$(document).ready(function() {

	$('#aboutUsButton').on('click', function(){
		home.addClass('hide');
		contact.addClass('hide');
		services.addClass('hide');
		about.removeClass('hide');
		order.addClass('hide');


	});
	$('#contactButton').on('click', function(){
		home.addClass('hide');
		contact.removeClass('hide');
		services.addClass('hide');
		about.addClass('hide');
		order.addClass('hide');


	});
	$('#ourServicesButton').on('click', function(){
		home.addClass('hide');
		contact.addClass('hide');
		services.removeClass('hide');
		about.addClass('hide');
		order.addClass('hide');


	});

	$('#homeButton').on('click', function(){
		home.removeClass('hide');
		contact.addClass('hide');
		services.addClass('hide');
		about.addClass('hide');
		order.addClass('hide');

	});

	/*$('#orderButton').on('click', function(){
		home.addClass('hide');
		contact.addClass('hide');
		services.addClass('hide');
		about.addClass('hide');
		order.removeClass('hide');

	});
	*/


});