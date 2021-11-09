/*
=============== 
Variables
===============
*/
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
const dateYear = new Date().getFullYear();
// December 31st (current year) at 11:59:59 PM
let futureDate = new Date(dateYear, 11, 31, 23, 59, 59);
const weekday = weekdays[futureDate.getDay()];
const month = months[futureDate.getMonth()];
const day = futureDate.getDate();
const hours = futureDate.getHours() - 12;
const minutes = futureDate.getMinutes();
const futureTime = futureDate.getTime();
let countdown = setInterval(getRemainingTime, 1000);

/*
=============== 
Functions
===============
*/
function format(item) {
  if (item < 10) {
    return (item = `0${item}`);
  }

  return item;
}

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  // 1s = 1000ms, 1m = 60s, 1hr = 60min, 1d = 24hr
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // Calculate values
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
  const values = [days, hours, minutes, seconds];
  // Set values
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  // Clear at expiration
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired</h4>`;
  }
}

/*
=============== 
Script
===============
*/
giveaway.textContent = `Giveaway ends on ${weekday} ${month} ${day}st, ${dateYear} at ${hours}:${minutes} PM`;
getRemainingTime();
