"use strict";

const darkModeIcon = document.getElementById('dark-mode-icon')
const darkModeMoon = document.querySelector('#dark-mode-icon i:first-child')
const darkModeSun = document.querySelector('#dark-mode-icon i:last-child')


darkModeIcon.addEventListener('click', () => {
  darkModeMoon.classList.toggle('show')
  darkModeSun.classList.toggle('show')

  darkModeMoon.classList.toggle('hide')
  darkModeSun.classList.toggle('hide')

  if (darkModeMoon.classList.contains("show")) {
    document.documentElement.style.setProperty("--page-background", "#fff")
    document.documentElement.style.setProperty("--dark-white-color", "#252525")
  } else {
    document.documentElement.style.setProperty("--page-background", "#252525")
    document.documentElement.style.setProperty("--dark-white-color", "#fff")
  }
})
