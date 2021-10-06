/*
=============== 
Variables
===============
*/
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const modalCloseBtn = document.querySelector(".modal-close-btn");

/*
=============== 
Event Listeners
===============
*/
modalBtn.addEventListener("click", function () {
  modal.classList.toggle("open-modal");
});

modalCloseBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});
