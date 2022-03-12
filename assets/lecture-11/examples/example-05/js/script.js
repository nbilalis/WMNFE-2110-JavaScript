'use strict';

const btn = document.getElementById('btn');

// `this` and `event.target` point to the same object
btn.addEventListener('click', function (event) {
  console.log('anonymous function', this);
  console.log('anonymous function', event.target);
  // event.stopPropagation();
});

// `this` and `event.target` **don't** point to the same object
btn.addEventListener('click', (event) => {
  console.log('arrow function', this);
  console.log('arrow function', event.target);
  // event.stopPropagation();
});

// Event bubbling
document.addEventListener('click', (event) => {
  console.log('document', event.target);
  console.log('document', event.currentTarget);
});
