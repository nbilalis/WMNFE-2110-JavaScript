'use strict';

function buttonClicked() {
  console.log('Button clicked!');
}

const button1 = document.getElementById('the-button');
button1.addEventListener('click', buttonClicked);

function pageLoaded() {
  console.log('Page loaded!');
}

document.addEventListener('DOMContentLoaded', pageLoaded);

// Alternatively

const button2 = document.getElementById('the-button');
button2.addEventListener('click', function () {
  console.log('Button clicked!');
});

document.addEventListener('DOMContentLoaded', () => {
  console.log('Page loaded!');
});
