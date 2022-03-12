'use strict';

// Objects with methods

let user1 = {
  firstname: 'Slim',
  lastname: 'Shady',
  greet() {
    alert(`My name is ${this.firstname} ${this.lastname}`);
  },
};

let user2 = {
  firstname: 'Jay',
  lastname: 'Z',
  greet() {
    alert(`My name is ${this.firstname} ${this.lastname}`);
  },
};

user1.greet();
user2.greet();

let car = {
  brand: 'Mercedes',
  model: 'SLK 55 AMG',
  color: 'Black',
  paint: function (newColor) {
    this.color = newColor;
  },
};

console.log(car.color); // Black

car.paint('Red');
console.log(car.color); // Red


car.color = 'Green';
console.log(car.color); // Green
