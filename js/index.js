$(document).ready(function() {
    $('a[href^="#"]').click(function() {
        let target = $(this).attr('href');

        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
    });

    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    $('.scroll-to-top').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
});