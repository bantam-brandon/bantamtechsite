jQuery(function ($) {
	"use strict";

	/* ========================================================================= */
	/*	Page Preloader
	/* ========================================================================= */

	// Preloader js
	$(window).on('load', function () {
		$('#preloader').fadeOut(700);
	});

});
// End Jquery Function


/* ========================================================================= */
/*	Animated section
/* ========================================================================= */

var wow = new WOW({
	offset: 100, // distance to the element when triggering the animation (default is 0)
	mobile: false // trigger animations on mobile devices (default is true)
});

//https://github.com/matthieua/WOW/issues/196#issuecomment-348734401
var scrolled = false;
$(window).on('scroll', function () {
	if (!scrolled) {
		scrolled = true;
		wow.init();
	}
})

/* ========================================================================= */
/*	
/* ========================================================================= */
$(document).ready(function () {
	

	const instance = basicScroll.create({
		elem: document.querySelector('.about-2'),
		from: 'top-middle',
		to: 'top-top',
		props: {
			'--navbgcolor': {
				from: 0,
				to: 1
			}
		}
	});
	const instance2 = basicScroll.create(
	{
		elem: document.querySelector('.about-2'),
		from: 'top-bottom',
		to: 'top-middle',
		timing: 'ease',
		props: {
			'--logoY': {
				from: '0px',
				to: '-150px',
				
			},
			'--logoSVGY':{
				from: '-3000px',
				to: '0px'
			},
			'--logoSVGOpacity':{
				from: '0',
				to: '1'
			},
			'--HerologoSVGY':{
				from: '0px',
				to: '-500px'
			},
			'--brandTextNav': {
				from: '-400px',
				to: '0px'
			},
			'--navColor': {
				from: 254,
				to: 0	
			}
		}
	});
	const instance3 = basicScroll.create({
		elem: document.querySelector('.about-2'),
		from: 'top-bottom',
		to: 'top-top',
		timing: 'ease',
		props: {
			'--redactedAboutTitle':{
				from: '100%',
				to: '0%',
			},
			'--heroParalax':{
				from: '0px',
				to: '60px',
			}
		}
			
	});

	instance.start();
	instance2.start();
	instance3.start();
	
	AOS.init({
		duration: 1200,
		once: true
	});

	$('.nav-link').click(function(){
		if($('.navbar-collapse.collapse').hasClass('show')){
			$('.navbar-toggler').click();
		}
	})
});