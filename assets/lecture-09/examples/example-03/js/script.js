'use strict';

const re1 = /[abc]/;

console.log(re1.test('a')); // true
console.log(re1.test('B')); // false
console.log(re1.test('g')); // false

console.log(re1.test('acdefg')); // true
console.log(re1.test('defg')); // false

const re2 = /[^-_.]/;

console.log(re2.test('&')); // true
console.log(re2.test('*')); // true
console.log(re2.test('-')); // false
console.log(re2.test('.')); // false

const re3 = /[a-z]/i;

console.log(re3.test('a')); // true
console.log(re3.test('C')); // true
console.log(re3.test('Γ')); // false
