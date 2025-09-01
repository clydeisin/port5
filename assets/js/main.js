/***************************************************
==================== JS INDEX ======================
****************************************************
Mobile Menu Js


****************************************************/

(function($) {
    "use strict";

    // Data Js
    $("[data-bg-image]").each(function() {
        $(this).css(
            "background-image",
            "url(" + $(this).attr("data-bg-image") + ")"
        );
    });

    $(document).ready(function($) {
        var lastScrollTop = 0;
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll > 300) {
                $(".tj-header-area.header-sticky").addClass("sticky");
                $(".tj-header-area.header-sticky").removeClass("sticky-out");
            } else if (scroll < lastScrollTop) {
                if (scroll < 500) {
                    $(".tj-header-area.header-sticky").addClass("sticky-out");
                    $(".tj-header-area.header-sticky").removeClass("sticky");
                }
            } else {
                $(".tj-header-area.header-sticky").removeClass("sticky");
            }

            lastScrollTop = scroll;
        });

        // Meanmenu Js
        $("#headerMenu").meanmenu({
            meanMenuContainer: ".mobile-menu",
            meanScreenWidth: "991",
            meanExpand: [
                "<i class='fa-light fa-plus'></i> <i class='fa-light fa-minus'></i>",
            ],
        });

        // Hamburger Menu Js
        $(".menu-bar").on("click", function() {
            $(".menu-bar").toggleClass("menu-bar-toggeled");
            $(".mobile-menu").toggleClass("opened");
            $("body").toggleClass("overflow-hidden");
        });

        $(".mobile-menu ul li a")
            .not(".mean-expand")
            .on("click", function() {
                $(".menu-bar").removeClass("menu-bar-toggeled");
                $(".mobile-menu").removeClass("opened");
                $("body").removeClass("overflow-hidden");
            });

        /*------------------------------------------------------
  	/  OnePage Active Class
  	/------------------------------------------------------*/
        var activeSection = null;

        function updateActiveSection() {
            var windowHeight = $(window).height();
            var windowMiddle = windowHeight / 2;

            $("section").each(function() {
                var section = $(this);
                var sectionTop = section.offset().top;

                // Check if the top of the section is in the middle of the screen
                if (sectionTop <= $(window).scrollTop() + windowMiddle) {
                    activeSection = section.attr("id");
                }
            });

            updateActiveListItem();
        }

        function updateActiveListItem() {
            $(".tj-header-menu ul li a").each(function() {
                var anchor = $(this);
                var listItem = anchor.closest(".menu-item");
                if (anchor.attr("href") === "#" + activeSection) {
                    listItem.addClass("current");
                } else {
                    listItem.removeClass("current");
                }
            });
        }

        $(window).on("scroll", function() {
            updateActiveSection();
        });

        // Initial call to set active section on page load
        updateActiveSection();
    });

    // Marquee Js
    var slider = new Swiper(".tj-marquee-active", {
        slidesPerView: "auto",
        spaceBetween: 0,
        loop: true,
        speed: 5000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
    });

    // Project Js
    var slider = new Swiper(".tj-project-active", {
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
        speed: 5000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
        breakpoints: {
            1400: {
                slidesPerView: 3.5,
            },
            1200: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 1.5,
            },
            320: {
                slidesPerView: 1,
            },
        },
    });

    // Rating Js
    if ($(".fill-ratings span").length > 0) {
        var star_rating_width = $(".fill-ratings span").width();
        $(".star-ratings").width(star_rating_width);
    }

    $(window).on("load", function() {
        // WoW Js
        var wow = new WOW({
            boxClass: "wow", // default
            animateClass: "animated", // default
            offset: 100, // default
            mobile: true, // default
            live: true, // default
        });
        wow.init();

        // Preloader Js
        const svg = document.getElementById("preloaderSvg");
        const tl = gsap.timeline();
        const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
        const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

        tl.to(".preloader-heading .load-text , .preloader-heading .cont", {
            delay: 1.5,
            y: -100,
            opacity: 0,
        });
        tl.to(svg, {
            duration: 0.5,
            attr: {
                d: curve
            },
            ease: "power2.easeIn",
        }).to(svg, {
            duration: 0.5,
            attr: {
                d: flat
            },
            ease: "power2.easeOut",
        });
        tl.to(".preloader", {
            y: -1500,
        });
        tl.to(".preloader", {
            zIndex: -1,
            display: "none",
        });
    });

    /*****************************************************************
================================= GSAP ====================================
********************************************************************/
    gsap.registerPlugin(ScrollTrigger, TweenMax, ScrollToPlugin);

    gsap.config({
        nullTargetWarn: false,
    });

    // Lenis Scroll Js

    /*
    ============================== Lenis Scroll Js =====================================
    */
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(time => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
})(jQuery);