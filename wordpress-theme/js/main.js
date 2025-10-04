/**
 * Main JavaScript for Ghoomo Saste Me Theme
 */

(function($) {
    'use strict';

    // Smooth scroll for anchor links
    $('a[href^="#"]').on('click', function(e) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });

    // Add active class to navigation on scroll
    $(window).on('scroll', function() {
        var scrollPos = $(window).scrollTop() + 100;
        
        $('section').each(function() {
            var top = $(this).offset().top;
            var bottom = top + $(this).outerHeight();
            var id = $(this).attr('id');
            
            if (scrollPos >= top && scrollPos <= bottom) {
                $('.primary-menu a').removeClass('active');
                $('.primary-menu a[href="#' + id + '"]').addClass('active');
            }
        });

        // Add shadow to header on scroll
        if (scrollPos > 50) {
            $('.site-header').css('box-shadow', '0 2px 10px rgba(0,0,0,0.3)');
        } else {
            $('.site-header').css('box-shadow', 'none');
        }
    });

    // Card hover effects
    $('.card').hover(
        function() {
            $(this).css('transform', 'translateY(-8px)');
        },
        function() {
            $(this).css('transform', 'translateY(0)');
        }
    );

    // Feature card hover effects
    $('.feature-card').hover(
        function() {
            $(this).css('transform', 'translateY(-8px) scale(1.02)');
        },
        function() {
            $(this).css('transform', 'translateY(0) scale(1)');
        }
    );

    // Initialize on document ready
    $(document).ready(function() {
        // Add fade-in animation for cards
        $('.card, .feature-card, .testimonial-card').each(function(i) {
            $(this).css({
                'opacity': '0',
                'transform': 'translateY(30px)'
            });
            $(this).delay(i * 100).animate({
                opacity: 1
            }, 600, function() {
                $(this).css('transform', 'translateY(0)');
            });
        });
    });

    // Form validation for search
    $('.search-form').on('submit', function(e) {
        e.preventDefault();
        var searchInput = $(this).find('input[type="text"]');
        var searchValue = searchInput.val().trim();
        
        if (searchValue === '') {
            alert('Please enter a destination to search');
            searchInput.focus();
            return false;
        }
        
        // Here you can add AJAX search functionality
        console.log('Searching for:', searchValue);
    });

})(jQuery);