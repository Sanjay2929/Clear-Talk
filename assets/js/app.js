// NAVBAR MOBILE
function shownav() {
  document.getElementById("showul").classList.toggle("nav_visible");
}

// SLIDER SOME OF OUR CALLS 
// $(".Slider").slick({
//   dots: true,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 2,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   responsive: [
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//       },
//     },
//     {
//       breakpoint: 500,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// }); 
// function hidenav() {
//   document.getElementById("showul").classList.add("start-0");
// }

// YEAR SCRIPT 
  document.getElementById('copyright').innerHTML = 'copyright&copy;' + new Date().getFullYear() + ' ClearTalk.ai - All Rights Reserved';

// BACK TO TOP
var mybutton = document.getElementById("back-to-top");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});
