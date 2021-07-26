'use strict';

// Palindrome:
// word that read the same forward and backword
// 1. Create two empty arrays for the reversed word then and array for the input
// 2. Split the word string into the array
// 3. Iterate through the word array.
// - Take the last letter and then push it into the reversed array
// 4. Once that's done, join together the reversed array into a String.
// 5. Compare the reversed String to the Input

const reversedArray = [];
let wordArray = [];

function isPalindrome(word) {
  wordArray = word.split('');

  for (let i = 0; i < word.length; i++) {
    reversedArray.push(wordArray.pop());
  }

  if (reversedArray.join('') === word) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome('car'));
