$(window).scroll(function () {
    var landingHeight = $('#landing').height() / 1.5;
    var scroll = $(window).scrollTop();

    if(scroll > landingHeight) {
        $('nav').removeClass('special');

    } else {
        $('nav').addClass('special');
    }
});