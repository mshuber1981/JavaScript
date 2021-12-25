// https://api.chucknorris.io/

/*
=============== 
Variables
===============
*/
const URL = "https://api.chucknorris.io/jokes/random";
const img = document.querySelector(".chuck");
const btn = document.querySelector(".btn");
const content = document.querySelector(".content");

/*
=============== 
Functions
===============
*/
function getData(url) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", url);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return;
    } else if (xhr.status === 200) {
      const random = Math.random() * 1000;
      const { value: joke } = JSON.parse(xhr.responseText);

      img.classList.add("shake-img");
      content.textContent = joke;
      setTimeout(function () {
        img.classList.remove("shake-img");
      }, random);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
      });
    }
  };
}

/*
=============== 
Event Listeners
===============
*/
btn.addEventListener("click", function () {
  getData(URL);
});
