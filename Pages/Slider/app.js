/*
=============== 
Variables
===============
*/
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
let counter = 0;

/*
=============== 
Functions
===============
*/
function carousel() {
  if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

/*
=============== 
Event Listeners
===============
*/
nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});
prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

/*
=============== 
Script
===============
*/
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
