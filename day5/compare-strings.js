// PROBLEM
// Compare two string arrays and find which strings
// match between the two arrays:

// TEST-CASES / EXAMPLES
const wordArr1 = ['dog', 'cat', 'fish', 'mango', 'ping', 'pong'];
const wordArr2 = ['fish', 'zebra', 'mango', 'khalifa', 'pong'];
// Output should be 'fish'

// DATA-STRUCTURE
// Arrays

// ALGORITHM

const matchedWords = [];

for (let i = 0; i < wordArr1.length; i++) {
  for (j = 0; j < wordArr2.length; j++) {
    if (wordArr1[i] === wordArr2[j]) {
      matchedWords.push(wordArr1[i]);
    }
  }
}

console.log(matchedWords);

// DESCRIPTION
// Not efficient, but brute force algo to solve before refactoring
