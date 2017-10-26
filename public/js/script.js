(function($) {
    
    "use strict";

     
    function preloader() {
            $('.preloader').delay(100).fadeOut(500);
    }
    // Navbar
    var nav = $('.main-navbar');
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
            nav.addClass("fixed-header");
        } else {
            nav.removeClass("fixed-header");
        }
    });

    // countdown Timer
    var now = new Date();
    var countTo = '2018/01/01';
    $('.timer').countdown(countTo, function(event) {
        $(this).find('.days').text(event.offset.totalDays);
        $(this).find('.hours').text(event.offset.hours);
        $(this).find('.minutes').text(event.offset.minutes);
        $(this).find('.seconds').text(event.offset.seconds);
    });
    
    //Search Popup
    //Show Popup
    $('.search-btn').on('click', function() {
        $('#search-item').addClass('search-visible');
    });

    //Hide Popup
    $('.search-close').on('click', function() {
        $('#search-item').removeClass('search-visible');
    });

    // Testimonial Carousel
    $('.testimonial-carousel').owlCarousel({
        loop:true,
        margin:0,
        dots: true,
        nav:false,
        autoplayHoverPause:false,
        autoplay: true,
        smartSpeed: 1500,
        navText: [
          '<i class="fa fa-angle-left" aria-hidden="true"></i>',
          '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1,
                center: false
            },
            480:{
                items:1,
                center: false
            },
            600: {
                items: 1,
                center: false
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });

    // Testimonial Carousel One
    $('.testimonial-carousel-one').owlCarousel({
        loop:true,
        margin:0,
        dots: true,
        nav:false,
        autoplayHoverPause:false,
        autoplay: true,
        smartSpeed: 1500,
        navText: [
          '<i class="fa fa-angle-left" aria-hidden="true"></i>',
          '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1,
                center: false
            },
            480:{
                items:1,
                center: false
            },
            600: {
                items: 1,
                center: false
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });

    // Testimonial Carousel Two
    $('.testimonial-carousel-two').owlCarousel({
        loop:true,
        margin:0,
        dots: false,
        nav:false,
        autoplayHoverPause:false,
        autoplay: true,
        smartSpeed: 1500,
        navText: [
          '<i class="fa fa-angle-left" aria-hidden="true"></i>',
          '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1,
                center: false
            },
            480:{
                items:1,
                center: false
            },
            600: {
                items: 1,
                center: false
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });

    // Team Carousel 
    $('.team-carousel').owlCarousel({
        loop:true,
        margin:0,
        dots: false,
        nav:true,
        autoplayHoverPause:false,
        autoplay: true,
        smartSpeed: 1500,
        navText: [
          '<i class="fa fa-angle-left" aria-hidden="true"></i>',
          '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1,
                center: false
            },
            480:{
                items:1,
                center: false
            },
            600: {
                items: 1,
                center: false
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });
    // Team Carousel 
    $('.event-carousel').owlCarousel({
        loop:true,
        margin:8,
        dots: false,
        nav:false,
        autoplayHoverPause:false,
        autoplay: true,
        smartSpeed: 1500,
        navText: [
          '<i class="fa fa-angle-left" aria-hidden="true"></i>',
          '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1,
                center: false
            },
            480:{
                items:1,
                center: false
            },
            600: {
                items: 1,
                center: false
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });
    
    // gallery Carousel 
    $('.gallery-carousel').owlCarousel({
        loop:true,
        margin:0,
        dots: false,
        nav:false,
        autoplayHoverPause:false,
        autoplay: true,
        smartSpeed: 1500,
        navText: [
          '<i class="fa fa-angle-left" aria-hidden="true"></i>',
          '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1,
                center: false
            },
            480:{
                items:1,
                center: false
            },
            600: {
                items: 1,
                center: false
            },
            768: {
                items: 4
            },
            992: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    });

    // Clients Carousel
    $('.clients-carousel').owlCarousel({
        loop:true,
        margin:0,
        dots: false,
        nav:true,
        autoplayHoverPause:false,
        autoplay: true,
        smartSpeed: 1500,
        navText: [
          '<i class="fa fa-angle-left" aria-hidden="true"></i>',
          '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1,
                center: false
            },
            480:{
                items:2,
                center: false
            },
            600: {
                items: 3,
                center: false
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });


    // Counter / Funfact 
    $('.start-count').each(function() {
        var $this = $(this);
        $this.data('target', parseInt($this.html(), 10));
        $this.data('counted', false);
        $this.html('0');
    });

    $(window).on('bind', 'scroll', function() {
        var speed = 4000;
        $('.start-count').each(function() {
            var $this = $(this);
            if (!$this.data('counted') && $(window).scrollTop() + $(window).height() >= $this.offset().top) {
                $this.data('counted', true);
                $this.animate({
                    dummy: 1
                }, {
                    duration: speed,
                    step: function(now) {
                        var $this = $(this);
                        var val = Math.round($this.data('target') * now);
                        $this.html(val);
                        if (0 < $this.parent('.value').length) {
                            $this.parent('.value').css('width', val + '%');
                        }
                    }
                });
            }
        });
    })
    .triggerHandler('scroll');



    // Progress Ber  
    startAnimation();

     function startAnimation(){
        jQuery('.skills').each(function(){

            jQuery(this).find('.skillbar-1').animate({
              width:jQuery(this).attr('data-percent')
            },3000); 

            jQuery(this).find('.skillbar-2').animate({
              width:jQuery(this).attr('data-percent')
            },3000); 

            jQuery(this).find('.skillbar-3').animate({
              width:jQuery(this).attr('data-percent')
            },3000);

            jQuery(this).find('.skillbar-4').animate({
              width:jQuery(this).attr('data-percent')
            },3000); 
            
        });
    } 

    // Slider JS Code Start


    //Function to animate slider captions 
    function doAnimations( elems ) {
        //Cache the animationend event in a variable
        var animEndEv = 'webkitAnimationEnd animationend';
        
        elems.each(function () {
            var $this = $(this),
                $animationType = $this.data('animation');
            $this.addClass($animationType).one(animEndEv, function () {
                $this.removeClass($animationType);
            });
        });
    }
    
    //Variables on page load 
    var $myCarousel = $('#carousel-example-generic'),
        $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
        
    //Initialize carousel 
    $myCarousel.carousel();
    
    //Animate captions in first slide on page load 
    doAnimations($firstAnimatingElems);
    
    //Pause carousel  
    $myCarousel.carousel({
      interval: 4000
    });

    
    
    //Other slides to be animated on carousel slide event 
    $myCarousel.on('slide.bs.carousel', function (e) {
        var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
        doAnimations($animatingElems);
    });

    // Slider JS Code End




     // Gallery filter 

    $('.gallery-filter li').on("click",function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    $('.gallery-filter').on('click', 'a', function () {
        $('#filters button').removeClass('current');
        $(this).addClass('current');
        var filterValue = $(this).attr('data-filter');
        $(this).parents(".gallery-filter-item").next().isotope({filter: filterValue});
    });

    
    // isotope | init Isotope
    if ($.fn.imagesLoaded && $(".gallery:not(.gallery-masonry)").length > 0) {
        var $container = $(".gallery:not(.gallery-masonry)");
        imagesLoaded($container, function () {
            setTimeout(function(){
                $container.isotope({
                    itemSelector: '.gallery-item',
                    layoutMode: 'fitRows',
                    filter: '*'
                });

                $(window).trigger("resize");
                // filter items on button click
            },500);

        });
    }

    
    //LightBox / Fancybox start
    $('.lightbox-image').fancybox({
        openEffect : 'elastic',
        closeEffect : 'elastic',
        openSpeed  : 250,
        helpers : {
            media : {}
        }
    });
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1500);
        return false;
    });

    if($('.player').length) {
        $('.player').mb_YTPlayer();
    }

      

$('#bootstrap-touch-slider').bsTouchSlider();

/* ==========================================================================
   When document is loading, do
   ========================================================================== */

    $(window).on('load', function() {
        // add your functions
        preloader();
    }); 


    // ----------- Ajax Contact script -----------//
    $(function() {
        // Get the form.
        var form = $('#ajax-contact');

        // Get the messages div.
        var formMessages = $('#form-messages');

        // Set up an event listener for the contact form.
        $(form).submit(function(event) {
            // Stop the browser from submitting the form.
            event.preventDefault();

            // Serialize the form data.
            var formData = $(form).serialize();
            // Submit the form using AJAX.
            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
                .done(function(response) {
                    // Make sure that the formMessages div has the 'success' class.
                    $(formMessages).removeClass('error');
                    $(formMessages).addClass('success');

                    // Set the message text.
                    $(formMessages).text(response);

                    // Clear the form.
                    $('#name').val('');
                    $('#subject').val('');
                    $('#email').val('');
                    $('#message').val('');
                })

                .fail(function(data) {
                    // Make sure that the formMessages div has the 'error' class.
                    $(formMessages).removeClass('success');
                    $(formMessages).addClass('error');

                    // Set the message text.
                    if (data.responseText !== '') {
                        $(formMessages).text(data.responseText);
                    } else {
                        $(formMessages).text('Oops! An error occured and your message could not be sent.');
                    }
                });
        });
    });


})(window.jQuery);

    
       
