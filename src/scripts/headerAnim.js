
import $ from 'jquery';

export default $(document).ready(function(){


	$(function(){
	
		
		$(window).scroll(function(){
			if($(window).scrollTop() <= 300){
				
				$('.nav').removeClass('nav-link');
				$('.nav__logo-container').removeClass('nav-logo');
				
			} else {
				
				$('.nav').addClass('nav-link');
				$('.nav__logo-container').addClass('nav-logo');
			}
		});
	});





	$('.nav__mobile').click(function(){
		$(this).toggleClass('open');
		//$('.nav__mobile-container').addClass('hide');
		$('.nav__mobile-container').toggleClass('show, hide');
	});

	$( '.nav__mobile-aboutMe, .nav__mobile-projects,.nav__mobile-connectWithMe, .nav__mobile-testimonials, .nav__mobile-contact, .nav__mobile-resume').click(function () { 
		
		$('.nav__mobile-container').addClass('hide');
		$('.nav__mobile').toggleClass('open');
	
		
	});



});