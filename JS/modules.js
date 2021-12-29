/*
=============== 
Generic Functions
===============
*/
export function getElement(selection) {
  const element = document.querySelector(selection);

  if (element) {
    return element;
  } else {
    throw new Error("No element selected.");
  }
}

export async function fetchData(url) {
  const response = await fetch(url).then(function (res) {
    if (!res.ok) {
      throw new Error(`${res.status}, check URL: ${url}`);
    }
    return res;
  });
  const data = await response.json();

  return data;
}

/*
=============== 
Cocktails
===============
*/
function showLoading(element) {
  const target = getElement(element);
  target.classList.remove("hide-loading");
}

export function hideLoading(element) {
  const target = getElement(element);
  target.classList.add("hide-loading");
}

function setDrink(section) {
  section.addEventListener("click", function (e) {
    const id = e.target.parentElement.dataset.id;

    localStorage.setItem("drink", id);
  });
}

export async function showDrinks(url) {
  const cocktails = getElement(".cocktails");
  // Show Loading
  showLoading(".loading");
  try {
    const data = await fetchData(url);
    const section = await displayDrinks(data);

    if (section) {
      setDrink(section);
    }
  } catch (error) {
    console.log(error);
    localStorage.removeItem("drink");
    cocktails.innerHTML = `<article class="error"><h4>${error}</h4></article>`;
  }
}

function displayDrinks({ drinks }) {
  const section = getElement(".section-center");
  const title = getElement(".title");

  if (!drinks) {
    //   Hide Loading
    hideLoading(".loading");
    title.textContent = "Sorry, no drinks matched your search.";
    section.innerHTML = null;
    return;
  } else {
    const newDrinks = drinks
      .map(function (drink) {
        const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;

        return `<a href="drink.html">
                    <article class="cocktail" data-id=${id}>
                        <img src=${image} alt=${name} />
                        <h3>${name}</h3>
                    </article>
                </a>`;
      })
      .join("");
    // Hide loading
    hideLoading(".loading");
    title.textContent = "";
    section.innerHTML = newDrinks;

    return section;
  }
}
