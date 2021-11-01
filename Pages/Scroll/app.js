/*
=============== 
Variables
===============
*/
const date = document.getElementById("date");
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links2");

/*
=============== 
Event Listeners
===============
*/
navToggle.addEventListener("click", function () {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

/*
=============== 
Script
===============
*/
date.innerHTML = new Date().getFullYear();
