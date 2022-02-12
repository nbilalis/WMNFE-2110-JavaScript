'use strict';

const form = document.forms['register-form'];

form.addEventListener('submit', (event) => {
  // Reference to the form elements
  const username = form.elements['name'];
  const age = form.elements['age'];
  const email = form.elements['e-mail'];

  let value;

  let isValid = true;

  value = username.value.trim();
  if (value.length === 0) {
    alert('Username is required');
    isValid = false;
  }

  value = +age.value.trim();
  if (isNaN(value) || value < 10 || value > 110) {
    alert('Age must be between 10 and 110');
    isValid = false;
  }

  value = email.value.trim();
  if (value.length === 0) {
    alert('E-mail is required');
    isValid = false;
  }

  if (value.indexOf('@') === -1) {
    alert("E-mail must contain an '@' symbol");
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault();
  }
});
