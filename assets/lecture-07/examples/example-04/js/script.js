'use strict';

const form = document.forms['login-form'];
const button = document.getElementById('login-button');

button.addEventListener('click', () => {
  /* for (let i = 0; i < form.elements.length; i++) {
    const el = elements[i];
  } */

  for (const el of form.elements) {
    console.log(el.name, el.value);
  }
});
