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

/*
=============== 
Functions
===============
*/
async function init() {
  try {
    const followers = await fetchData(URL);

    title.textContent = "Pagination";
    displayFollowers(paginate(followers)[0]);
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

/*
=============== 
Event Listeners
===============
*/
window.addEventListener("load", init);
