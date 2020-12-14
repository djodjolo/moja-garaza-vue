/* ===================================================================
    Author          : CreandyStudio
    Template Name   : Meramot - Car Repair Landing Page Template
    Version         : 1.0
* ================================================================= */

(function($) {
    "use strict";

    $(document).on('ready', function() {

    /*==================================
     # Hero SLider  
     ==================================*/
    $('.car-hero-slider').owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
    });

    $(".car-hero-slider").on("translate.owl.carousel", function(){
       
        $(".car-slide-content h1").removeClass("animated fadeInDown").css("opacity", "0");
        $(".car-slide-content p").removeClass("animated fadeInUp").css("opacity", "0");
        $(".car-slide-content a").removeClass("animated slideInLeft").css("opacity", "0");
        $(".car-slide-image img").removeClass("animated fadeInRight").css("opacity", "0");
        
    });

    $(".car-hero-slider").on("translated.owl.carousel", function(){
        
        $(".car-slide-content h1").addClass("animated fadeInDown").css("opacity", "1");
        $(".car-slide-content p").addClass("animated fadeInUp").css("opacity", "1");
        $(".car-slide-content a").addClass("animated slideInLeft").css("opacity", "1");
        $(".car-slide-image img").addClass("animated fadeInRight").css("opacity", "1");

    });


    /*==================================
     # home page one - slide Item Carousel 
     ==================================*/
    $('.testimonial-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.testimonial-client-nav'
    });

    $('.testimonial-client-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.testimonial-list',
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        prevArrow: '<i class="fal fa-arrow-left"></i>',
        nextArrow: '<i class="fal fa-arrow-right"></i>',
    });    

    /*==================================
     # home page two - testimonial
     ==================================*/
    $('.testimonial-client-nav-two').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.testimonials-two'
    });

    $('.testimonials-two').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.testimonial-client-nav-two',
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        prevArrow: '<i class="fal fa-arrow-left"></i>',
        nextArrow: '<i class="fal fa-arrow-right"></i>',
    });


    /* ==================================
     # Team Item carousel active
    ===================================== */
     $(".team-carousel-active").owlCarousel({
        loop:true,
        margin: 30,
        nav: false,
        dots: false,
        autoplayTimeout:5000,
        autoplay:true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
                items: 1
            },
            // breakpoint from 768 up
            768 : {
                items: 2
            },
            // breakpoint from 992 up
            992 : {
                items: 3
            }
        }
     });


    /*==========================
       Count up init
    ============================*/
    $('.single-funfact span, .single-round-box span').counterUp({
        delay: 20,
        time: 2000
    });

    /* =============================================
        # Magnific popup init
     ===============================================*/
        $(".popup-link").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            // other options
        });

        $(".popup-gallery").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            // other options
        });

        $(".popup-video, .popup-vimeo, .popup-gmaps").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        var wow = new WOW(
            {
                mobile: false,
            }
        )
        wow.init();


    /*==================================
     # meanmenu active - mobile menu 
     ==================================*/
    $('#responsive-menu').meanmenu({
        meanMenuContainer: '.responsive-menu',
        meanScreenWidth: "991"
    });


    /*==========================
       Scroll To Up init
    ============================*/
    $.scrollUp({
      scrollName: 'scrollUp', // Element ID
      topDistance: '1110', // Distance from top before showing element (px)
      topSpeed: 2000, // Speed back to top (ms)
      animation: 'slide', // Fade, slide, none
      animationInSpeed: 300, // Animation in speed (ms)
      animationOutSpeed: 300, // Animation out speed (ms)
      scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    // Preloading
    $(window).on('load', function() {
        // Animate loader off screen
        $(".pre-loader").delay(600).fadeOut();
    });

    //# Smooth Scroll
    $('#responsive-menu a').on('click', function(event) {
        var $anchor = $(this);
        var headerH = '80';
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


    // data - background
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

     /*==================================
        # countdown - comming soon  
     ==================================*/
     $('#countdown').countdown({
        year: 2021, // YYYY Format
        month: 1, // 1-12
        day: 1, // 1-31
        hour: 0, // 24 hour format 0-23
        minute: 0, // 0-59
        second: 0, // 0-59
      });

    // sticky
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 5) {
            $(".main-menu").removeClass("sticky");
        } else {
            $(".main-menu").addClass("sticky");
            $(".sticky").sticky({
                topSpacing: 0,
                zIndex: 99999999
            });
        }
    });

    }); // end document ready function
})(jQuery); // End jQuery

