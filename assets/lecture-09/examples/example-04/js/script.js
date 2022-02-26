'use strict';

const re1 = /[pbt]ear/;

console.log(re1.test('bear')); // true
console.log(re1.test('pear')); // true
console.log(re1.test('tear')); // true
console.log(re1.test('gear')); // false
console.log(re1.test('A bear is drinking a bear')); // true

const re2 = /^.ear$/;

console.log(re2.test('bear')); // true
console.log(re2.test('pear')); // true
console.log(re2.test('tear')); // true
console.log(re2.test('gear')); // true
console.log(re2.test('ear')); // false
