$(function () {

	// animacja na hover -------------------------------------

	var cover = $( ".cover" );

	cover.on("mouseenter", function (event) {
		$(this).addClass("coverOnHover" );
	});

    // menu hamburger ----------------------------------------

	var menu = $(".hamburgerMenu");
	var menuOpen = $(".hamburgerMenuOpen");

	menu.on("click", function (event) {

		menuOpen.slideToggle({direction: 'down'},300);

	});

// rozszerzanie coverów 

	var cover = $(".cover");
	var logo = $(".logo");
	var content = $(".xyz");
	var coverTitle = $(".content");

	cover.on("click", function(event) {
		cover.addClass("coverMin");
		cover.removeClass("coverMax");
		$(this).removeClass("coverMin").addClass("coverMax");
		content.css("display", "block");
		// coverTitle.css("display", "none");
	});

	logo.on("click", function (event) {
		cover.removeClass("coverMax");
		cover.removeClass("coverMin");
		// content.css("display", "none");
		coverTitle.css("display", "block");

	});










});