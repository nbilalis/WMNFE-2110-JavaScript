'use strict';

const form = document.forms['register-form'];

// Handle the submit event
form.addEventListener('submit', (event) => {
  // Reference to the form elements
  const username = form.elements['username'];
  const age = form.elements['age'];
  const email = form.elements['e-mail'];

  let isValid = true;

  // Username checks
  if (username.value.trim().length === 0) {
    // Required
    console.error('Username is missing');
    isValid = false;
  }

  // Age checks
  if (age.value.trim().length === 0) {
    // Required
    console.error('Age is missing');
    isValid = false;
  } else if (isNaN(age.value)) {
    // Numeric
    console.error('Age is not a number');
    isValid = false;
  }

  // E-mail checks
  if (email.value.trim().length === 0) {
    // Required
    console.error('E-mail is missing');
    isValid = false;
  } else if (email.value.indexOf('@') < 0) {
    // Valid e-mail
    console.error('E-mail is not valid');
    isValid = false;
  }

  // Prevent submit if any validation failed
  if (!isValid) event.preventDefault();
});
