'use strict';

const form = document.forms['login-form'];

form.addEventListener('submit', (event) => {
  console.log(event);

  const username = form.elements['username'].value; // document.getElementById('username').value;
  const password = form.elements['password'].value; // document.getElementById('password').value;

  if (username.trim().length === 0 || password.trim().length === 0) {
    alert('Please fill in all fields!');
  }

  event.preventDefault();
});
