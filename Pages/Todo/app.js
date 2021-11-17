/*
=============== 
Variables
===============
*/
const alert = document.querySelector(".alert");
const form = document.querySelector(".todo-form");
const todo = document.getElementById("todo");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".todo-container");
const list = document.querySelector(".todo-list");
const clearBtn = document.querySelector(".clear-btn");
let editElement;
let editFlag = false;
let editID = "";

/*
=============== 
Functions
===============
*/
function addItem(e) {
  e.preventDefault();
  const value = todo.value;
  const id = new Date().getTime().toString();

  if (value && !editFlag) {
    const element = document.createElement("article");
    const attribute = document.createAttribute("data-id");

    attribute.value = id;
    element.setAttributeNode(attribute);
    element.classList.add("todo-item");
    element.innerHTML = `<p class="title">${value}</p>
              <div class="btn-container">
                <button type="submit" class="edit-btn">
                  <i class="fas fa-edit"></i>
                </button>
                <button type="submit" class="delete-btn">
                  <i class="fas fa-trash"></i>
                </button>
              </div>`;
    list.appendChild(element);
    // Display alert
    displayAlert("Item added to list", "success");
    // Show container
    container.classList.add("show-container");
    // Add to local Storage
    addToLocalStorage(id, value);
    // Set default
    setDefault();
  } else if (value && editFlag) {
    console.log("Editing");
  } else {
    displayAlert("Please enter value", "danger");
  }
}

function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

function addToLocalStorage(id, value) {
  console.log("Added to local storage");
}

function setDefault() {
  console.log("Setting defualt");
}

/*
=============== 
Event Listeners
===============
*/
form.addEventListener("submit", addItem);
