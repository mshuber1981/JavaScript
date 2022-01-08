/*
=============== 
Variables
===============
*/
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const sidebarHeader = document.querySelector(".sidebar-header");
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
  document.body.style.overflowY = "hidden";
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
  document.body.style.overflowY = "auto";
});

document.body.addEventListener("click", function (e) {
  console.log(e.target.parentElement, e.target);
  if (
    e.target.parentElement !== toggleBtn &&
    e.target.parentElement !== sidebar &&
    e.target.parentElement !== sidebarHeader &&
    e.target !== sidebar
  ) {
    sidebar.classList.remove("show-sidebar");
    document.body.style.overflowY = "auto";
  }
});

window.addEventListener(
  "DOMContentLoaded",
  () => (document.body.style.overflowY = "auto")
);
