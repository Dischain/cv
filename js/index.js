$(document).ready(function() {
    $('a[href^="#"]').click(function() {
        let target = $(this).attr('href');

        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
    });

    $(window).scroll(() => {
        if($(this).scrollTop() != 0) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    $('.scroll-to-top').click(() => {
        $('body,html').animate({scrollTop:0},800);
    });

    $(window).scroll(() => {
    	function elementScrolled(elem) {
	        var docViewTop = $(window).scrollTop();
	        var docViewBottom = docViewTop + $(window).height();
	        var elemTop = $(elem).offset().top;
	        return ((elemTop <= docViewBottom - 100) && (elemTop >= docViewTop));
    	}
    	$('h2[id^=anchor_]').each(function(){
    		let p = $('a[href="#' + $(this).attr('id') + '"]').parent();
    		if (elementScrolled($(this))) {
    			p.addClass('side-bar__item_active');
    		} else {
    			p.removeClass('side-bar__item_active')
    		}
    	})
    });
});