'use strict';

const re = /abc/;

console.log(re.test('abc')); // true
console.log(re.test('Alphabet starts with abc')); // true
console.log(re.test('Η αλφαβήτα ξεκινά με αβγ')); // false
