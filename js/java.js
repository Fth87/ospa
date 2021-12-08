// <!-- Custom JS for background color on scrolling -->

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll < 5) {
    $('.fixed-top').css('background', 'transparent');
    $('.fixed-top').css('color', 'white');
  } else {
    $('.fixed-top').css('background', 'blue');
    $('.fixed-top').css('color', 'black');
    
  }
});
