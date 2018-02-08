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
