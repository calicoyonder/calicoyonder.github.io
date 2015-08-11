$(document).ready(function(){

// Sticky 

    $('.container').sticky({topSpacing:0});

// Cursor code */
	$('.container').mouseenter(function(){
		$(this).css('cursor', 'pointer');
	});
	$('.main-contain').mouseenter(function(){
		$(this).css('cursor', 'crosshair');
	});
// Title or Sprite Animation */
    $('.main').ready(function(){
    $('.main').tubular({videoId: 'Cp_EenBttmM'}); 
	});
// Navigation Bar */
	$('a').mouseenter(function(){
		$(this).css('text-transform', 'uppercase');
	});
	$('a').mouseleave(function(){
		$(this).css('text-transform', 'lowercase');
	});
	$('.container img').mouseenter(function(){
		$(this).css('transform', 'scaleX(-1)');
	});
	$('.container img').mouseleave(function(){
		$(this).css('transform', 'scaleX(1)');
	});

// Panel/Main Effects */


// Final Closure
});