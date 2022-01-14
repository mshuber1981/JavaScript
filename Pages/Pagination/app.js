import { getElement, fetchData } from "../../JS/modules.js";

/*
=============== 
Variables
===============
*/
const URL = "https://api.github.com/users/john-smilga/followers?per_page=100";
const title = getElement(".section-title h2");
const followersElement = getElement(".followers");
const container = getElement(".container");
const btnContainer = getElement(".btn-container");
let index = 0;
let pages = [];

/*
=============== 
Functions
===============
*/
async function init() {
  try {
    const followers = await fetchData(URL);

    title.textContent = "Pagination";
    pages = paginate(followers);
    setupUI();
  } catch (error) {
    title.textContent = "Error";
    followersElement.innerHTML = `
    <div class="error">
        <h4>${error}</h4>
    </div>
    `;
  }
}

function displayFollowers(followers) {
  const newFollowers = followers
    .map(function (person) {
      const { avatar_url, login, html_url } = person;

      return `
        <article class="card">
            <img src="${avatar_url}" alt="${login}" />
            <h4>${login}</h4>
            <a href="${html_url}" class="btn">View profile</a>
        </article>
        `;
    })
    .join("");

  container.innerHTML = newFollowers;
}

function paginate(followers) {
  const itemsPerPage = 12;
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);
  const newFollowers = Array.from(
    { length: numberOfPages },
    function (_, index) {
      const start = index * itemsPerPage;

      return followers.slice(start, start + itemsPerPage);
    }
  );

  return newFollowers;
}

function displayButtons(container, pages, activeIndex) {
  let btns = pages.map(
    (_, pageIndex) =>
      `<button class="page-btn ${
        activeIndex === pageIndex ? "active-btn" : "null"
      }" data-index="${pageIndex}">${pageIndex + 1}</button>`
  );

  btns.unshift('<button class="prev-btn">Prev</button>');
  btns.push('<button class="next-btn">Next</button>');
  container.innerHTML = btns.join("");
}

function setupUI() {
  displayFollowers(pages[index]);
  displayButtons(btnContainer, pages, index);
}

/*
=============== 
Event Listeners
===============
*/
window.addEventListener("load", init);
btnContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-container")) return;
  if (e.target.classList.contains("page-btn")) {
    index = parseInt(e.target.dataset.index);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  if (e.target.classList.contains("next-btn")) {
    index++;
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    if (index > pages.length - 1) {
      index = 0;
    }
  }
  if (e.target.classList.contains("prev-btn")) {
    index--;
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    if (index < 0) {
      index = pages.length - 1;
    }
  }

  setupUI();
});
