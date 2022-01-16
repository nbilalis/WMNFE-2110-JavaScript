'use strict';

const input = prompt('Enter a phrase:');

const res = longestWord(input);
console.log(res);

function longestWord(text) {
  const words = text.split(' ');
  console.log(words);

  let max = 0;
  let maxWord;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word.length > max) {
      max = word.length;
      maxWord = word;
    }
  }

  /* for (let word of words) {
    if (word.length > max) {
      max = word.length;
      maxWord = word;
    }
  } */

  return maxWord;
}
