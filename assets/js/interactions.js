$(window).on("load resize scroll", function(e) {
    $('.active-wrap').css('height', $('.active-area').first().innerHeight());
    $('.in-page-link').bind('click', function(e) {
        $(this).addClass('current');
        $('.in-page-link').not(this).removeClass('current');
        $('.active-wrap').find('.current').removeClass('current');
        $('.active-wrap').find($(this).attr('href')).addClass('current');
    });
});
