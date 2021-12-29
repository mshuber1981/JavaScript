// https://www.thecocktaildb.com/

import { getElement, showDrinks } from "../../JS/modules.js";

/*
=============== 
Variables
===============
*/
const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const form = getElement(".search-form");
const input = getElement("[name='drink']");

/*
=============== 
Event Listeners
===============
*/
window.addEventListener("DOMContentLoaded", () => showDrinks(URL));

form.addEventListener("keyup", function (e) {
  e.preventDefault();
  const value = input.value;
  // https://stackoverflow.com/questions/154059/how-can-i-check-for-an-empty-undefined-null-string-in-javascript
  if (value.length > 0 && /^\s*$/.test(value)) {
    return;
  } else if (value.length === 0) {
    showDrinks(URL);
  } else {
    showDrinks(`${baseURL}${value}`);
  }
});
