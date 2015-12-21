$(document).ready(function() {
	$('#change_background').on('click', function() {
  	$('body').css('background-color','#191919');
  	$('#gallery li').css('background-color','#3c3c3c');
  	$('#gallery li').css('border-color','#10b828')
  	$('#gallery li a p').css('color','#999');
  	$('.yup').css('color', '#333133');
  	$('header').css('background-color','#0ed52a');
  	$('header').css('border-color','#10b828');
  	$('.profile-photo').css('border-color', '#10b828');
  });
});

