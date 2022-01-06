import { getElement, sublinks } from "../../JS/modules.js";

/*
=============== 
Variables
===============
*/
const toggleBtn = getElement(".toggle-btn");
const closeBtn = getElement(".close-btn");
const sidebarWrapper = getElement(".sidebar-wrapper");
const sidebar = getElement(".sidebar-links");
// const submenu = getElement(".submenu");
const hero = getElement(".hero");
const nav = getElement(".nav");
const linkBtns = [...document.querySelectorAll(".link-btn")];

/*
=============== 
Event Listeners
===============
*/
toggleBtn.addEventListener("click", () => sidebarWrapper.classList.add("show"));
closeBtn.addEventListener("click", () =>
  sidebarWrapper.classList.remove("show")
);

/*
=============== 
Script
===============
*/
sidebar.innerHTML = sublinks
  .map(function (item) {
    const { links, page } = item;

    return `<article>
  <h4>${page}</h4>
  <div class="sidebar-sublinks">
  ${links
    .map(function (link) {
      return `<a href="${link.url}">
    <i class="${link.icon}"></i>${link.label}
    </a>
    `;
    })
    .join("")}
  </div>
  `;
  })
  .join("");
