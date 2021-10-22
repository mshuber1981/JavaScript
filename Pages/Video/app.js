/*
=============== 
Variables
===============
*/
const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const preloader = document.querySelector(".preloader");

/*
=============== 
Event Listeners
===============
*/
btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});

// https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
