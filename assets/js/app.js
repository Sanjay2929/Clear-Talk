// NAVBAR MOBILE
function shownav() {
  document.getElementById("showul").classList.toggle("navShow");
  document.getElementById("shownav").classList.toggle("crossmenu");
  document
    .getElementById("overflow")
    .classList.toggle("custom_overflow_lg_hidden");
}

// YEAR SCRIPT
document.getElementById("copyright").innerHTML =
  "copyright&copy;" +
  new Date().getFullYear() +
  " ClearTalk.ai - All Rights Reserved";

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
