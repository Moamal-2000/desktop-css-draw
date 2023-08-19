"use strict";

const darkModeIcon = document.getElementById('dark-mode-icon');
const darkModeMoon = document.querySelector('#dark-mode-icon i:first-child');
const darkModeSun = document.querySelector('#dark-mode-icon i:last-child');
let darkMode = JSON.parse(localStorage.getItem("dark-mode"));


function applyDarkModeStyles() {
  if (darkMode) {
    document.documentElement.style.setProperty("--page-background", "#252525");
    document.documentElement.style.setProperty("--dark-white-color", "#fff");
  } else {
    document.documentElement.style.setProperty("--page-background", "#fff");
    document.documentElement.style.setProperty("--dark-white-color", "#252525");
  }
}

applyDarkModeStyles();  // Apply styles on page load

darkModeIcon.addEventListener('click', () => {
  darkMode = !darkMode;  // Toggle the darkMode value

  localStorage.setItem("dark-mode", JSON.stringify(darkMode));  // Update localStorage

  darkModeMoon.classList.toggle('hide');
  darkModeSun.classList.toggle('show');
  darkModeSun.classList.toggle('hide');
  darkModeMoon.classList.toggle('show');

  applyDarkModeStyles();  // Apply styles after the mode is toggled
});
