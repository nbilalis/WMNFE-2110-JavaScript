'use strict';

// Make a new XMLHttpRequest object
const req = new XMLHttpRequest();

// Set the request parameters
req.open('GET', 'data.txt');

/* req.onload = function () {
  // callback function
  console.log(req.response);
}; */

req.addEventListener('load', () => {
  console.log(req.response);
});

// Send the request
req.send();
