// SLIDER SOME OF OUR CALLS
$(".Slider").slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 300,
    centerMode: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: ".slider_arrow_right",
    prevArrow: ".slider_arrow_left",
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