'use strict';

const button = document.getElementById('the-button');

function pageLoaded() {
  console.log('Page loaded!');
}

window.onload = pageLoaded;

function buttonClicked() {
  console.log('Button clicked!');
}

button.onclick = buttonClicked;

// Alternatively

window.onload = function () {
  console.log('Page loaded!');
};

button.onclick = function () {
  console.log('Button clicked!');
};
