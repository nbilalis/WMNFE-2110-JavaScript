'use strict';

// Get a reference to the form
const form = document.forms['the-form'];

// Get references to the form elements
const textEl = form.elements['text']; // document.getElementById('text');
const queryEl = form.elements['query']; // document.getElementById('search');
const btnEl = form.elements['search']; // document.getElementById('search');

// When the user clicks the button...
btnEl.addEventListener('click', () => {
  // Get the values from the two elements
  const text = textEl.value.trim();
  const query = queryEl.value.trim();

  if (!text) {
    alert('There is no text');
    return;
  }

  if (!query) {
    alert('There is no query');
    return;
  }

  let position = -1;
  const occurances = [];

  // Find all occurrences of the query in the text
  while (true) {
    position = text.indexOf(query, position + 1);

    if (position > -1) {
      console.log(position);
      occurances.push(position);
    } else {
      break;
    }
  }

  alert(occurances);
});
