//jQuery to collapse the navbar on scroll
//***********************************************************************
$(window).scroll(function() {
    "use strict";
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
//jQuery for page scrolling feature - requires jQuery Easing plugin
//***********************************************************************
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Gallery and Gallery Filter Styles 
//***********************************************************************
$(document).ready(function() {
    "use strict";
    if ($('#specials-masonry').length > 0) {

        // Call to Masonry plugin
        var gallerymasonry = $('#specials-masonry').isotope({
            itemSelector: '.single-item',
            layoutMode: 'fitRows',
            transitionDuration: '.6s',
            hiddenStyle: {
                opacity: 0,
                transform: "scale(.85)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
			
        });
		
		

// Filtering the Special Items
//***********************************************************************
        $('#specials-masonry-sort a').on('click', function(e) {
            e.preventDefault();
            var $this = $(this);
            if ($this.parent('li').hasClass('active')) {
                return false;
            } else {
                $this.parent('li').addClass('active').siblings('li').removeClass('active');
            }
            var filterValue = $this.data('target');
            gallerymasonry.isotope({
                filter: filterValue
            });
            return $this;
        });

    }

// Magnific Popup Gallery
//***********************************************************************
    $('.specials-item').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('#toggle').click(function() {

        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });

    $("#overlay").on("click", "li", function() {

        $("#toggle").click();
    });

// Back to top link
//***********************************************************************
// Only enable if the document has a long scroll bar
// Note the window height + offset
    if (($(window).height() + 100) < $(document).height()) {
        $('#top-link-block').removeClass('hidden').affix({
            // how far to scroll down before link "slides" into view
            offset: {
                top: 100
            }

        });
        $('#top-link-block').each(function() {
            $(this).click(function() {
                $('html,body').animate({
                    scrollTop: 0
                }, 'slow');
                return false;
            });
        });
    }

});