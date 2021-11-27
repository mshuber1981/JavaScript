/*
=============== 
Classes
===============
*/
function Counter(element, value) {
  this.counter = element;
  this.value = value;
  this.resetBtn = element.querySelector(".reset");
  this.increaseBtn = element.querySelector(".increase");
  this.decreaseBtn = element.querySelector(".decrease");
  this.valueDOM = element.querySelector(".value");
  this.valueDOM.textContent = this.value;
  // Bind "this" to each prototype function
  this.increase = this.increase.bind(this);
  this.decrease = this.decrease.bind(this);
  this.reset = this.reset.bind(this);
  // Event Listeners
  this.increaseBtn.addEventListener("click", this.increase);
  this.decreaseBtn.addEventListener("click", this.decrease);
  this.resetBtn.addEventListener("click", this.reset);
  // Set colors based on initial value
  if (this.value > 0) {
    this.counter.querySelector(".value").style.color = "green";
  }
  if (this.value < 0) {
    this.counter.querySelector(".value").style.color = "red";
  }
  if (this.value === 0) {
    this.counter.querySelector(".value").style.color = "#222";
  }
}

Counter.prototype.increase = function () {
  this.value++;
  this.valueDOM.textContent = this.value;

  if (this.value > 0) {
    this.counter.querySelector(".value").style.color = "green";
  }
  if (this.value === 0) {
    this.counter.querySelector(".value").style.color = "#222";
  }
};

Counter.prototype.decrease = function () {
  this.value--;
  this.valueDOM.textContent = this.value;

  if (this.value < 0) {
    this.counter.querySelector(".value").style.color = "red";
  }
  if (this.value === 0) {
    this.counter.querySelector(".value").style.color = "#222";
  }
};

Counter.prototype.reset = function () {
  this.value = 0;
  this.valueDOM.textContent = this.value;
  this.counter.querySelector(".value").style.color = "#222";
};

/* ES6 Class example
class Counter {
  constructor(element, value) {
    this.counter = element;
    this.value = value;
    this.resetBtn = element.querySelector(".reset");
    this.increaseBtn = element.querySelector(".increase");
    this.decreaseBtn = element.querySelector(".decrease");
    this.valueDOM = element.querySelector(".value");
    this.valueDOM.textContent = this.value;
    // Bind "this" to each prototype function
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);
    // Event Listeners
    this.increaseBtn.addEventListener("click", this.increase);
    this.decreaseBtn.addEventListener("click", this.decrease);
    this.resetBtn.addEventListener("click", this.reset);
    // Set colors based on initial value
    if (this.value > 0) {
      this.counter.querySelector(".value").style.color = "green";
    }
    if (this.value < 0) {
      this.counter.querySelector(".value").style.color = "red";
    }
    if (this.value === 0) {
      this.counter.querySelector(".value").style.color = "#222";
    }
  }

  increase() {
    this.value++;
    this.valueDOM.textContent = this.value;

    if (this.value > 0) {
      this.counter.querySelector(".value").style.color = "green";
    }
    if (this.value === 0) {
      this.counter.querySelector(".value").style.color = "#222";
    }
  }

  decrease() {
    this.value--;
    this.valueDOM.textContent = this.value;

    if (this.value < 0) {
      this.counter.querySelector(".value").style.color = "red";
    }
    if (this.value === 0) {
      this.counter.querySelector(".value").style.color = "#222";
    }
  }

  reset() {
    this.value = 0;
    this.valueDOM.textContent = this.value;
    this.counter.querySelector(".value").style.color = "#222";
  }
}
*/

/*
=============== 
Variables
===============
*/
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".main-btn");
const firstCounter = new Counter(getElement(".first-counter"), 100);
const secondCounter = new Counter(getElement(".second-counter"), 200);
const oopCounters = document.querySelectorAll(".oop");
let count = 0;

/*
=============== 
Functions
===============
*/
function getElement(selection) {
  const element = document.querySelector(selection);

  if (element) {
    return element;
  }

  throw new Error(`Please check ${selection}, no such element exists.`);
}

/*
=============== 
Event Listeners
===============
*/
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;

    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }

    value.textContent = count;
  });
});
