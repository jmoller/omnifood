$(document).ready(function () {

    /* For the sticky navigation */
    $('.section-features').waypoint(function (direction) {

        if (direction == "down") {

            $('nav').addClass('sticky');
        } else {

            $('nav').removeClass('sticky');
        }


    }, {
        offset: '60px'
    });

    /* Handler for the buttons */

    $('#signupButton').click(function () {
        $('html, body').animate({
            scrollTop: $('.section-price').offset().top
        }, 1000);
    });

    $('#featuresButton').click(function () {
        $('html, body').animate({
            scrollTop: $('.section-features').offset().top
        }, 1000);
    });


    /* Smooth Scrolling */

    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });


    /* Animations on scroll*/

    $('.js-wp-1').waypoint(function (direction) {

        $('.js-wp-1').addClass('animated fadeIn');

    }, {
        offset: '50%'
    })
    
    $('.js-wp-2').waypoint(function (direction) {

        $('.js-wp-2').addClass('animated fadeInUp');

    }, {
        offset: '50%'
    })
    
    $('.js-wp-3').waypoint(function (direction) {

        $('.js-wp-3').addClass('animated fadeInUp');

    }, {
        offset: '50%'
    })
    
    $('.js-wp-4 ').waypoint(function (direction) {

        $('.js-wp-4').addClass('animated pulse');

    }, {
        offset: '50%'
    })
    
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		var nav = $('.js-main-nav');
        
        
        if(nav.css('opacity') == '1'){
            nav.animate({opacity: 0}, 1000);
        }else{
            nav.animate({opacity: 1}, 1000);
        }
        
        $(this).toggleClass('open');
          
        
         
	});
    
    
    
})