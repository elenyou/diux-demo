jQuery(document).ready(function($) {
    // Transition effect for navbar
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if ($(this).scrollTop() > 50) {
        $(".header-custom").addClass("solid");
      } else {
        $(".header-custom").removeClass("solid");
      }
    });
  });


