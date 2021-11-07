$('.reviews__slider').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    infinite: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.svg"></button>',
    variableWidth: true,
    responsive: [
      {
          breakpoint: 768,
          settings: {
              arrows: false,
              slidesToShow: 1,
              // centerMode: false
              // variableWidth: false
          }
      }
    ]
  });

$(document).ready(function() {
  $('.header__hamburger').click(function(event) {
    $('.header__hamburger,.header__list,.header__logo').toggleClass('active');
  });
});