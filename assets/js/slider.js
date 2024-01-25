// SLIDER SOME OF OUR CALLS
$(".Slider").slick({
  dots: false,
  infinite: true,
  // arrows: true,
  speed: 300,
  centerMode: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: $(".slider_arrow_left"),
  nextArrow: $(".slider_arrow_right"),

  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
});