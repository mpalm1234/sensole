// BACK TO TOP BUTTON
function scrollNav() {
  $('.nav a').click(function(){
    //Toggle Class
    $(".active").removeClass("active");
    $(this).closest('li').addClass("active");

    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');

    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 400);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();

// BACK TO TOP BUTTON -- only make visible sometimes
$(document).ready(function() {
  var btt = $('.back-to-top');

  btt.on('click', function(e) {
    $('html, body').animate({
      scrollTop: 0
    }, 500);

    e.preventDefault();
  });

  $(window).on('scroll', function() {
    var self = $(this),
        height = self.height(),   // height of screen (constant)
        top = self.scrollTop();   // distance from top of screen to how far you are currently scrolled down
    if(top > (height / 2)) {
      if(!btt.is('visible')) {
        btt.show();
      }
    } else {
      btt.hide();
    }
  });
});

// Button smooth scrolling
window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer)
          return;
        scrollContainer.scrollTop += 1;
    }
    while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relative to the container
        if (target == scrollContainer)
          break;
        targetY += target.offsetTop;
    }
    while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++;
        if (i > 30)
          return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}
