$(function() {
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  var x = 0;

  $(window).scroll(function() {
    var y = $(this).scrollTop();
    var z = $('.navbar').css('height');

    if (y - x > 50) {
      $('.navbar').animate({top: '-' + z}, 150);
      x = y;
    }else if (x - y > 50){
      $('.navbar').animate({top: 0}, 150);
      x = y;
    }
  });
});
