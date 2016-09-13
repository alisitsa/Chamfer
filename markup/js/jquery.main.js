// Create the dropdown base
var nav = $("#main-nav");
$("<select class='nav-select visible-xs' />").appendTo(nav);
var select = nav.find("select");

// Populate dropdown with menu items
nav.find("a").each(function() {
	var el = $(this);
		$("<option />", {
		"value"   : el.attr("href"),
		"text"    : el.text()
	}).appendTo("nav select");
});

$("nav select").change(function() {
	window.location = $(this).find("option:selected").val();
});

var navi = $("#portfolio-nav");
$("<select class='nav-select visible-xs' />").appendTo(navi);
var select = navi.find("select");

// Populate dropdown with menu items
navi.find("a").each(function() {
	var el = $(this);
		$("<option />", {
		"value"   : el.attr("href"),
		"text"    : el.text()
	}).appendTo("navi select");
});

$("navi select").change(function() {
	window.location = $(this).find("option:selected").val();
});

$(function(){
	$('#gallery').slick({
		dots: true, 
		autoplay: false,
		slidesToShow: 2,
  		slidesToScroll: 2,
	});

	$('.js--features-gallery').slick({
		arrows: false,
		dots: true
	});
})