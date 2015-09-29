$(document).ready(function(){
  $('.bxslider').bxSlider({
  	slideWidth: 450,
  	mode: 'fade',
  	captions: true,
  	adaptiveHeight: true
	});

  $('#aboutlink').click(function(){
    $('.skillbar').each(function(){
	  $(this).find('.skillbar-bar').animate({
		  width:$(this).attr('data-percent')
		  },3500);
    });
    });

});