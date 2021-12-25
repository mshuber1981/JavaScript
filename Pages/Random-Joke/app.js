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
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) {
        return;
      } else if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject({
          status: xhr.status,
          text: xhr.statusText,
        });
      }
    };
  });
}

function displayData(data) {
  const random = Math.random() * 1000;
  const { value: joke } = JSON.parse(data);

  img.classList.add("shake-img");
  content.textContent = joke;
  setTimeout(function () {
    img.classList.remove("shake-img");
  }, random);
}

function displayError(err) {
  const random = Math.random() * 1000;
  const { status: error } = err;

  img.classList.add("shake-img");
  content.textContent = `${error}, check URL: ${URL}`;
  setTimeout(function () {
    img.classList.remove("shake-img");
  }, random);
}

/*
=============== 
Event Listeners
===============
*/
btn.addEventListener("click", function () {
  getData(URL)
    .then((res) => displayData(res))
    .catch(function (err) {
      console.log(err);
      displayError(err);
    });
});
