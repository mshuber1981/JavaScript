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
if (topLink) {
  window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;

    if (scrollHeight > 250) {
      topLink.classList.add("show-link");
    } else {
      topLink.classList.remove("show-link");
    }
  });
}

toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");

  if (window.innerWidth < 676) {
    document.body.style.overflowY = "hidden";
  }
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");

  if (window.innerWidth < 676) {
    document.body.style.overflowY = "auto";
  }
});

window.addEventListener(
  "DOMContentLoaded",
  () => (document.body.style.overflowY = "auto")
);
