'use strict';

const el1 = document.getElementById('top');
const el2 = document.getElementById('the-top'); // null

console.log(el1);
console.log(el2);

const el3 = document.getElementsByClassName('mw-jump-link');
console.log(el3);

for (const el of el3) {
  console.log(el);
}

const el4 = document.getElementsByTagName('h2');
console.log(el4);

const el5 = document.querySelector('#top'); // el1
const el6 = document.querySelectorAll('.mw-jump-link'); // el3

console.log(el5);
console.log(el6);
