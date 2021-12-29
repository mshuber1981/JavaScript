import { fetchData, getElement, hideLoading } from "../../JS/modules.js";

/*
=============== 
Functions
===============
*/
function displayDrink(data) {
  const drink = data.drinks[0];
  const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drink;
  const list = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
    drink.strIngredient6,
    drink.strIngredient7,
    drink.strIngredient8,
    drink.strIngredient9,
    drink.strIngredient10,
    drink.strIngredient11,
    drink.strIngredient12,
    drink.strIngredient13,
    drink.strIngredient14,
    drink.strIngredient15,
  ];
  const img = getElement(".drink-img");
  const drinkName = getElement(".drink-name");
  const description = getElement(".drink-desc");
  const ingredients = getElement(".drink-ingredients");

  document.title = name;
  img.src = image;
  img.alt = name;
  drinkName.textContent = name;
  description.textContent = desc;
  ingredients.innerHTML = list
    .map(function (item) {
      if (!item) {
        return;
      } else {
        return `<li><i class="far fa-check-square"></i>${item}</li>`;
      }
    })
    .join("");
  // Hide Loading
  hideLoading(".loading-single");
}

async function presentDrink() {
  const id = localStorage.getItem("drink");

  if (!id) {
    window.location.replace("./index.html");
  } else {
    const drink = await fetchData(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    displayDrink(drink);
  }
}

/*
=============== 
Event Listeners
===============
*/
window.addEventListener("DOMContentLoaded", function () {
  presentDrink();
});
