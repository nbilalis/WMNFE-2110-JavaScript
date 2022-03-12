'use strict';

function Student(id, firstname, lastname) {
  this.id = id;
  this.firstname = firstname;
  this.lastname = lastname;

  // `_` denotes a "private" property
  this._courses = [];

  this.addCourse = function (name) {
    this._courses.push(name);
  };

  this.fullname = function () {
    return `${this.firstname} ${this.lastname}`;
  };
}

let luke = new Student(1, 'Luke', 'Skywalker');

luke.addCourse('Quantum Mechanics');
// You can still access `_courses` directly
luke._courses.push('Relativity');

console.log(luke.firstname);
console.log(luke.lastname);

console.log(luke.fullname());
