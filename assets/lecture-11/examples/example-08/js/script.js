'use strict';

function Student(fn, ln, grades) {
  this.firstName = fn;
  this.lastName = ln;
  this.grades = grades;

  this.checkGrades = function () {
    let sum = 0;
    for (let g of this.grades) {
      sum += g;
    }
    let avg = sum / this.grades.length;

    if (avg >= 9.5) {
      return true;
    } else {
      return false;
    }

    // return (avg >= 9.5);
  };
}

// Call of the constructor function with the "new" keyword
const s1 = new Student('N', 'B', [8, 12, 3, 12]);
const s2 = new Student('A', 'C', [16, 17, 14, 18]);

console.log(s1.checkGrades());
console.log(s2.checkGrades());
