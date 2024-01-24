// NAVBAR MOBILE
function shownav() {
  document.getElementById("showul").classList.toggle("nav_visible");
}
<<<<<<< HEAD

// SLIDER SOME OF OUR CALLS 
$(".Slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}); 
=======
// function hidenav() {
//   document.getElementById("showul").classList.add("start-0");
// }

// YEAR SCRIPT 
  document.getElementById('copyright').innerHTML = 'copyright&copy;' + new Date().getFullYear() + ' ClearTalk.ai - All Rights Reserved';
>>>>>>> 320f91d10f9beb9f841c6303a2f2426e4869e737
