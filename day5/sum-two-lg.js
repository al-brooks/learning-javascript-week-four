// PROBLEM
// Find the sum of the two largest numbers in numArr1

// TEST-CASES
const numArr1 = [10, 25, 66, 78, 13, 16, 2, 95, 31];
// ouput: 173

const sumArr = [];
let sum = 0;
counter = 0;

// DATA-STRUCTURE
// ARRAYS

// ALGORITHM
// Bubble Sort to sort array in ascending order
// push end nums into a sum array
// add together all those values

for (let i = 0; i < numArr1.length; i++) {
  let swapped = false;
  for (let j = 0; j < numArr1.length; j++) {
    if (numArr1[j] > numArr1[j + 1]) {
      let temp = numArr1[j];
      numArr1[j] = numArr1[j + 1];
      numArr1[j + 1] = temp;
      swapped = true;
    }
  }
}

for (let i = numArr1.length - 1; i > numArr1.length - 3; i--) {
  sumArr[counter] = numArr1[i];
  counter++;
}

console.log(numArr1);
console.log(sumArr);

for (let i = 0; i < sumArr.length; i++) {
  sum += sumArr[i];
}

// COMPLETE
console.log(sum);
