/*
=============== 
Variables
===============
*/
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const topLink = document.querySelector(".top-link");

/*
=============== 
Event Listeners
===============
*/
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 250) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
