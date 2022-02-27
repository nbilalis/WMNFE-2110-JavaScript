'use strict';

// Make a new XMLHttpRequest object
const req = new XMLHttpRequest();

// Set the request parameters
req.open('GET', './data/cars.json');
req.responseType = 'json';

// Add the event listener for state changes
req.addEventListener('readystatechange', () => {
  console.log(req.readyState);

  // When the request is done...
  if (req.readyState === XMLHttpRequest.DONE) {
    // XMLHttpRequest.DONE === 4
    // Check the response status and act accordingly
    switch (req.status) {
      case 200:
        const ul = document.getElementById('list');

        // Show the car data (from json) in a list
        for (let car of req.response) {
          const li = document.createElement('li');
          li.innerText = `${car.brand} - ${car.model}`;
          ul.appendChild(li);
        }
        break;
      case 404:
        console.error('Not found');
        break;
    }
  }
});

req.send();
