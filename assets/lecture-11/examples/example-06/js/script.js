'use strict';

function Car(brand, model, color) {
  this.brand = brand;
  this.model = model;
  this.color = color;

  this.paint = function (color) {
    this.color = color;
  };
}

// This is a *better* way to declare a class method
// since it won't create a new object every time
/* Car.prototype.paint = function (color) {
  this.color = color;
}; */

let car1 = new Car('Audi', 'R8', 'Silver');
let car2 = new Car('Ferrari', '488 GT', 'Red');
let car3 = new Car('Toyota', 'Corolla', 'Grey');

car3.paint('Red');

console.log(car1);
console.log(car2);
console.log(car3);
