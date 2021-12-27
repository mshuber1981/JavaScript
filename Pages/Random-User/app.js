// https://randomuser.me/

import { getElement } from "../../JS/modules.js";

/*
=============== 
Variables
===============
*/
const URL = "https://randomuser.me/api/";
const img = getElement(".user-img");
const title = getElement(".user-title");
const value = getElement(".user-value");
const btn = getElement(".btn");
const valuesList = getElement(".values-list");
const btns = [...document.querySelectorAll(".icon")];
let errorMessage = "";

/*
=============== 
Functions
===============
*/
async function getUser() {
  const response = await fetch(URL).then(function (res) {
    if (!res.ok) {
      errorMessage = `${res.status}, check URL: ${URL}`;
    }
    return res;
  });
  const data = await response.json();
  // Data
  const person = data.results[0];
  const {
    phone,
    email,
    dob: { age },
  } = person;
  const { large: image } = person.picture;
  const { password } = person.login;
  const { first, last } = person.name;
  const {
    street: { number, name },
  } = person.location;

  return {
    phone,
    email,
    image,
    password,
    age,
    name: `${first} ${last}`,
    street: `${number} ${name}`,
  };
}

async function showUser() {
  try {
    const person = await getUser();

    displayUser(person);
  } catch (error) {
    value.textContent = errorMessage;
    console.log(errorMessage);
  }
}

function displayUser(person) {
  img.src = person.image;
  title.textContent = "My name is";
  value.textContent = person.name;
  valuesList.style.display = "grid";
  //   Remove active class from all icons then add to first
  btns.forEach((btn) => btn.classList.remove("active"));
  btns[0].classList.add("active");

  btns.forEach(function (btn) {
    const label = btn.dataset.label;
    // Event listeners
    btn.addEventListener("click", function () {
      title.textContent = `My ${label} is`;
      value.textContent = person[label];
      btns.forEach((btn) => btn.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}

/*
=============== 
Event Listeners
===============
*/
window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
