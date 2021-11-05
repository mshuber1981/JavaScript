/*
=============== 
Variables
===============
*/
const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

/*
=============== 
Event Listeners
===============
*/
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  const element = document.getElementById(id);

  if (id) {
    //   Remove/add active class for buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    // Show/hide active content
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    element.classList.add("active");
  }
});
