'use strict';

const login_form = document.forms['login-form'];
const elements = login_form.getElementsByTagName('input');

console.log(elements);

for (const el of elements) {
  el.addEventListener('blur', () => {
    if (el.value.trim().length === 0) {			// el.value === ''
      console.log(`Field with name ${el.name} is required`);
      el.classList.add('error');
    } else {
      el.classList.add('ok');
    }
  });

  el.addEventListener('focus', () => {
    el.classList.remove('ok');
    el.classList.remove('error');
  });
}

// ES6

/* elements.forEach((el) => {
  ...
}); */
