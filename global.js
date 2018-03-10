

// Navbar -- smooth scrolling
function scrollNav() {
  $('.nav a').click(function(){             // apply to each button in navbar
    $('html, body').animate({
       scrollTop: $( $(this).attr('href') ).offset().top   // scroll to the href of button we clicked
    }, 400);                                               // speed
  });
}
scrollNav();

// Patient/Clinician Buttons -- smooth scrolling
function scrollButton() {
  $('.whoAmI').click(function(){             // apply to each button in navbar
    $('html, body').animate({
       scrollTop: $( $(this).attr('href') ).offset().top   // scroll to the href of button we clicked
    }, 400);                                               // speed
  });
}
scrollButton();

// Back To Top button
$(document).ready(function() {

  // smooth scrolling
  let btt = $('.back-to-top');
  btt.on('click', function(e) {
    $('html, body').animate({
      scrollTop: 0
    }, 400);
    e.preventDefault();   // default action of event will not be triggered
  });

  // only make visible if scrolled down enough
  $(window).on('scroll', function() {
    let self = $(this);
    let height = self.height();   // height of screen (constant)
    let top = self.scrollTop();   // distance from top of screen to how far you are currently scrolled down
    if(top > (height / 2)) {
      if(!btt.is('visible')) {
        btt.show();
      }
    } else {
      btt.hide();
    }
  });
});
