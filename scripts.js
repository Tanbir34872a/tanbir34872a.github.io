$(document).ready(function() {
    $('#fullpage').fullpage({
        autoScrolling: true,
        scrollHorizontally: true,
        navigation: true,
        navigationPosition: 'right',
        scrollingSpeed: 700,
        onLeave: function(origin, destination, direction) {
            var section = destination.item;
            $(section).find('h2, p, img').addClass('animated');
        }
    });

    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Additional interactivity
    $('.nav-link').click(function() {
        var target = $(this).attr('href');
        $.fn.fullpage.moveTo(target.substring(1));
    });
});
