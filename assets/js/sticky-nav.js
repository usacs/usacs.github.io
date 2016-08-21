$(window).scroll(function () {
	var landingHeight = $('#landing').height() / 1.5;
	var scroll = $(window).scrollTop();
	var landing;

	if ($('body').has('#landing')) {
		landing = true;
	}

	if (!landing) {
		landingHeight = 0;
	}

	if (scroll > landingHeight) {
		$('nav').removeClass('special');
		$('nav').css('top', '0px');
	} else {
		$('nav').css('top', '-50px');
		$('nav').addClass('special');
	}
});
