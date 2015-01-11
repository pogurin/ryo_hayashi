// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function() {

	$('#hideBox').fadeIn();

	$(document).scroll(function () {
		// if ($(this).scrollTop() < $('#hideBox').height()) {
		// 	$('#hideBox').fadeIn();
		// } else {
		// 	$('#hideBox').fadeOut();
		// }
	});

	$("nav").hover(function(){
		$(this).find("#hideBox").fadeIn();
	}, function() {
		if ($(this).scrollTop() > 0) {
			$(this).find("#hideBox").fadeOut();
		}
	});

	$("#pageTop").click(function() {
		$('html, body').animate({
			scrollTop: $("#welcome").offset().top
		}, 1000);
	});

	$("#worknav").click(function() {
		$('html, body').animate({
			scrollTop: $("#work").offset().top
		}, 1000);
	});

	$("#pressnav").click(function() {
		$('html, body').animate({
			scrollTop: $("#press").offset().top
		}, 1000);
	});

	$("#recruitnav").click(function() {
		$('html, body').animate({
			scrollTop: $("#recruit").offset().top
		}, 1000);
	});


	$("#visionnav").click(function() {
		$('html, body').animate({
			scrollTop: $("#vision").offset().top
		}, 1000);
	});

	$("#mambernav").click(function() {
		$('html, body').animate({
			scrollTop: $("#member").offset().top
		}, 1000);
	});


	$("#companynav").click(function() {
		$('html, body').animate({
			scrollTop: $("#company").offset().top
		}, 1000);
	});

	$("#contactnav").click(function() {
		$('html, body').animate({
			scrollTop: $("#contact").offset().top
		}, 1000);
	});
});


$(function(){
	$('.btns').click(function(){
		wn = '.' + $(this).data('tgt');
		var mW = $(wn).find('.modalBody').innerWidth() / 2;
		var mH = $(wn).find('.modalBody').innerHeight() / 2;
		$(wn).find('.modalBody').css({'margin-left':-mW,'margin-top':-mH});
		$(wn).fadeIn(500);
	});
	$('.close,.modalBK').click(function(){
		$(wn).fadeOut(500);
	});
});



