$(document).ready(function() {
	$('#aboutUsButton').on('click', function(){
		$('#homeDiv').addClass('hide');
		$('#contactDiv').addClass('hide');
		$('#ourServicesDiv').addClass('hide');
		$('#aboutUsDiv').removeClass('hide');

	});
	$('#contactButton').on('click', function(){
		$('#homeDiv').addClass('hide');
		$('#contactDiv').removeClass('hide');
		$('#ourServicesDiv').addClass('hide');
		$('#aboutUsDiv').addClass('hide');

	});
	$('#ourServicesButton').on('click', function(){
		$('#homeDiv').addClass('hide');
		$('#contactDiv').addClass('hide');
		$('#ourServicesDiv').removeClass('hide');
		$('#aboutUsDiv').addClass('hide');

	});

	$('#homeButton').on('click', function(){
		$('#homeDiv').removeClass('hide');
		$('#contactDiv').addClass('hide');
		$('#ourServicesDiv').addClass('hide');
		$('#aboutUsDiv').addClass('hide');

	});

});