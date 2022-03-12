'use strict';

const student = {
  firstname: 'Luke',
  'last-name': 'Skywalker', // lastname: 'Skywalker',
  hobbies: ['Chess', 'Tennis'],
  courses: [
    { name: 'Course #1', grade: 9 },
    { name: 'Course #2', grade: 10 },
    { name: 'Course #3', grade: 8 },
  ],
};

// Two different ways to access the properties of an object
console.log(student.firstname);
console.log(student['last-name']);

console.log(student);
console.log(typeof student);

for (const hobbie of student.hobbies) {
  console.log(hobbie);
}

for (let i = 0; i < student.courses.length; i++) {
  const course = student.courses[i];
  console.log(`${course.name} ${course.grade}`);

  // console.log(`${student.courses[i].name}: ${student.courses[i].grade}`);
}
