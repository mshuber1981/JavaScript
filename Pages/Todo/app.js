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
    createListItem(id, value);
    // Display alert
    displayAlert("Item added to list", "success");
    // Show container
    container.classList.add("show-container");
    // Add to local Storage
    addToLocalStorage(id, value);
    setDefault();
  } else if (value && editFlag) {
    editElement.innerText = value;
    displayAlert("Value updated", "success");
    editLocalStorage(editID, value);
    setDefault();
  } else {
    displayAlert("Please enter value", "danger");
  }
}

function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  // Remove item
  list.removeChild(element);
  // If the list is empty hide the container
  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  // Display alert
  displayAlert("Item removed", "danger");
  // Remove local storage
  removeFromLocalStorage(id);
  setDefault();
}

function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // Set form value
  todo.value = editElement.innerText;
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = "Edit";
}

function clearItems() {
  const items = document.querySelectorAll(".todo-item");

  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  // Hide container
  container.classList.remove("show-container");
  // Display alert
  displayAlert("Cleared list", "danger");
  // Remove local storage
  localStorage.removeItem("list");
  setDefault();
}

function createListItem(id, value) {
  const element = document.createElement("article");
  const attribute = document.createAttribute("data-id");

  attribute.value = id;
  element.setAttributeNode(attribute);
  element.classList.add("todo-item");
  element.innerHTML = `<p class="title"></p>
              <div class="btn-container">
                <button type="submit" class="edit-btn" title="Edit">
                  <i class="fas fa-edit"></i>
                </button>
                <button type="submit" class="delete-btn" title="Delete">
                  <i class="fas fa-trash"></i>
                </button>
              </div>`;
  element.querySelector(".title").innerText = value;

  const deleteBtn = element.querySelector(".delete-btn");
  const editBtn = element.querySelector(".edit-btn");

  deleteBtn.addEventListener("click", deleteItem);
  editBtn.addEventListener("click", editItem);
  list.appendChild(element);
}

function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 2000);
}

function setDefault() {
  todo.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}

// Local Storage
function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

function addToLocalStorage(id, value) {
  const item = { id: id, value: value };
  let items = getLocalStorage();

  items.push(item);
  localStorage.setItem("list", JSON.stringify(items));
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();

  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value) {
  let items = getLocalStorage();

  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}

function setupItems() {
  let items = getLocalStorage();

  if (items.length > 0) {
    items.forEach(function (item) {
      createListItem(item.id, item.value);
    });
    container.classList.add("show-container");
  }
}

/*
=============== 
Event Listeners
===============
*/
window.addEventListener("DOMContentLoaded", setupItems);
form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearItems);
