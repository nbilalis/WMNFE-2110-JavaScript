'use strict';

document.getElementById('register-button').addEventListener('click', () => {
  const form = document.forms['register-form'];
  const other = form.elements['gender-other'];

  // Get the state
  console.log(other.checked);

  // Set the state
  other.checked = true;

  const gender = form.elements['gender'];
  console.log(gender);  // RadioNodeList
  console.log(gender.value);
});


