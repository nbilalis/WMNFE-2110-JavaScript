'use strict';

document.getElementById('button').addEventListener('click', () => {
  const form = document.forms['hobbies'];
  console.log(form.elements['sports']);       // RadioNodeList
//console.log(form.elements['sports'].value); // Won't work

  // Get the values of the selected checkboxes in group 'sports'

  // The more traditional way
  const elements = document.querySelectorAll('input[name="sports"][type="checkbox"]');

  const values1 = [];
  for (let el of elements) {
    if (el.checked === true) {		// or just `el.checked`
      values1.push(el.value);
    }
  }
  console.log(values1);

  // The ES6 way
  const values2 = Array
    .from(document.querySelectorAll('input[name="sports"][type="checkbox"]'))
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);
  console.log(values2);

  // Get the 'consent' checkbox
  console.log(form.elements['consent'].value);
  console.log(form.elements['consent'].checked);
});
