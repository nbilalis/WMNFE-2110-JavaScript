'use strict';

const el1 = document.getElementById('el1');
const el2 = document.getElementById('el2');

el1.addEventListener('mouseover', function (event) {
  console.log('this', this);
  console.log('event', event);
  console.log('event.target', event.target);
});

el2.addEventListener('mouseover', (event) => {
  console.log('this', this); 					// Oops
  console.log('event', event);
  console.log('event.target', event.target);
});
