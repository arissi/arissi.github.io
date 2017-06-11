(function($) {
    var menuIcon = document.getElementById('mobile-menu-icon');
    var dropdownMenu = document.getElementById('mobile-dropdown');
    var workHead = document.getElementById('work');
    var mobileNav = document.getElementsByClassName('mob-a');

    for (var i = 0; i < mobileNav.length; i++) {
        mobileNav[i].addEventListener('click', toggleMobileMenu);
    }

    function toggleMobileMenu() {
        if(dropdownMenu.style.top === "55px") {
            dropdownMenu.style.top = "-500px";
        } else {
            dropdownMenu.style.top = "55px"
        }
    }

    menuIcon.addEventListener('click', toggleMobileMenu);

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

})(jQuery);
