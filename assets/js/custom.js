$(document).ready(function () {
    /* $('.testimonial-slider').owlCarousel({
        margin: 10,
        nav: false,
        loop: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $('.brand-slider').owlCarousel({
        margin: 20,
        nav: true,
        dots: false,
        loop: true,
        autoplay: true,
        navText: ["<i class='icon-arrow-left'></i>", "<i class='icon-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })

    $('.brand-slider').owlCarousel({
        margin: 20,
        nav: true,
        dots: false,
        loop: true,
        autoplay: true,
        navText: ["<i class='icon-arrow-left'></i>", "<i class='icon-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })

    $('.four-col-slider').owlCarousel({
        margin: 20,
        nav: true,
        dots: false,
        loop: true,
        autoplay: true,
        navText: ["<i class='icon-arrow-left'></i>", "<i class='icon-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
    */


    $('.image-gallery-slider').owlCarousel({
        margin: 20,
        nav: true,
        dots: true,
        loop: true,
        autoplay: true,
        navText: ["<i class='icon-angle-left'></i>", "<i class='icon-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    }) 

    $('.testimonial-slider').owlCarousel({
        margin: 20,
        nav: true,
        dots: true,
        loop: true,
        autoplay: true,
        navText: ["<i class='icon-angle-left'></i>", "<i class='icon-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    }) 

    //Tabs
    $('.tabs-item__link').click(function () {
        $(".tabs-panel").removeClass('tabs-panel-active');
        $(".tabs-panel[data-id='" + $(this).attr('data-id') + "']").addClass("tabs-panel-active");
        $(".tabs-item__link").removeClass('active');
        $(this).parent().find(".tabs-item__link").addClass('active');
    });


    //Blog JS start here
    /* $('.blog-detail-left-section .list li').bind('click', function (e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        var target = $(this).attr("data-id"); // Set the target as variable

        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 600, function () {
            location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });

        return false;
    }); */

    /* $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();

        // Assign active class to nav links while scolling
        $('.scroll-section').each(function (i) {
            if ($(this).position().top <= scrollDistance + 10) {
                $('.blog-detail-left-section .list li.active').removeClass('active');
                $('.blog-detail-left-section .list li').eq(i).addClass('active');
            }
        });
    }).scroll(); */

    /* if ($(window).width() < 991) {
        $('.top-heading').on('click', function () {
            $(this).siblings('.list').slideToggle();
        })
    } */
    //Blog JS end here


    //Fixed header
    /* $(window).scroll(function () {
        var sticky = $('header'),
            scroll = $(window).scrollTop();

        if (scroll >= 200) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    }); */


    // Navbar Menu
    /* if ($(window).width() < 1199) {
        $('.navbar-item.dropdown').on('click', function () {
            console.log('Working');
            $('.navbar-nav .dropdown-menu').hide();
            $(this).children('.dropdown-menu').show();
        })
    } */

    //Lightbox 
    /* lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        alwaysShowNavOnTouchDevices: true
    }) */

    var lightbox = GLightbox();
    var lightboxDescription = GLightbox({
        selector: '.glightbox2'
    });
    var lightboxVideo = GLightbox({
        selector: '.glightbox3'
    });
    lightboxVideo.on('slide_changed', ({ prev, current }) => {
        console.log('Prev slide', prev);
        console.log('Current slide', current);

        const { slideIndex, slideNode, slideConfig, player } = current;

        if (player) {
            if (!player.ready) {
                // If player is not ready
                player.on('ready', (event) => {
                    // Do something when video is ready
                });
            }

            player.on('play', (event) => {
                console.log('Started play');
            });

            player.on('volumechange', (event) => {
                console.log('Volume change');
            });

            player.on('ended', (event) => {
                console.log('Video ended');
            });
        }
    });

    var lightboxInlineIframe = GLightbox({
        selector: '.glightbox4'
    });

    // What we do JS
    $('.location-list-title').on('click', function () {
        $('.location-list').removeClass('active');
        $('.location-list-desc').slideUp();
        $(this).siblings('.location-list-desc').slideToggle();
        $(this).parent('.location-list').addClass('active');

        let mapPath = $(this).attr('data-src');
        $('.location-map iframe').attr('src', `${mapPath}`);
    })
})

// Accessibility JS code 
/* $(function () {
    $('body').openAccessibility({
        localization: ['en'],
        textSelector: 'h1, h2, h3, h4, p, a'
    });
}) */

// Menu toggle for mobile
/* const menuToggle = document.querySelector('.navbar-menu-toggle');
const navbarNav = document.querySelector('.navbar-nav');
menuToggle.addEventListener('click', function () {
    console.log(menuToggle);
    navbarNav.classList.toggle('open-navbar');
    menuToggle.classList.toggle('close-icon');
})

// Accordian
const accordion = document.getElementsByClassName('accordians');

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}

// Admission Steps JS
if ($(window).width() > 991) {
    if (typeof window.IntersectionObserver !== 'undefined') {
        let options = {
            threshold: [0.5, 1]
        }
        const targets = document.querySelectorAll('.steps-section-content');
        const locker = document.querySelector('.steps-section-image');
        function handleIntersection(entries) {
            entries.map((entry) => {
                if (entry.isIntersecting) {
                    entry.target.current = entry.target.dataset.swap;
                    document.querySelector(".steps-section-image ." + entry.target.current).classList.add("active");
                } else {
                    document.querySelector(".steps-section-image ." + entry.target.current).classList.remove("active");
                }
            });
        }
        const observer = new IntersectionObserver(handleIntersection, options);
        targets.forEach(target => observer.observe(target));
    } else {
        // Fallback
    }
} */
