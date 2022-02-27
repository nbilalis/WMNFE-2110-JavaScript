'use strict';

// Element references
const ul = document.getElementById('list');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentPage;

// Helper function to get/show the "paged" data
function getData() {
  fetch(`http://swapi.dev/api/people/?page=${currentPage}`)
    .then((response) => {
      return response.json();
    }) // .then(response => response.json())
    .then((json) => {
      // console.log(json);

      // Clear the list
      ul.innerHTML = '';
      // Populate the list with new data

      for (const char of json.results) {
        const li = document.createElement('li');
        li.innerText = `${char.name} - ${char.height}cm`;
        ul.appendChild(li);
      }

      /* json.results.forEach((char) => {
        const li = document.createElement('li');
        li.innerText = `${char.name} - ${char.height}cm`;
        ul.appendChild(li);
      }); */

    });
}

// Initialize the state of the "app"
document.addEventListener('DOMContentLoaded', () => {
  currentPage = 1;
  getData();
});

// Event listener for button "Next"
next.addEventListener('click', () => {
  currentPage += 1;
  getData();
});

// Event listener for button "Previous"
prev.addEventListener('click', () => {
  currentPage -= 1;
  getData();
});
