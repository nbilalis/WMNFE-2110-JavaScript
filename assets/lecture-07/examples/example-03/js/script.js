'use strict';

const button = document.getElementById('login-button');

button.addEventListener('click', () => {
  const form = document.forms['login-form'];

  const username = form.elements['username'].value;
  const password = form.elements['password'].value;

  if (username === 'admin' && password === 'admin') {
    alert('Welcome!');
  } else {
    alert('Wrong username or password!');
  }
});
