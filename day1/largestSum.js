'use strict';

// Being given an array of numbers
const newArray = [];

function largestNum(array) {
  newArray.push(array[0]);

  for (let i = 0; i < array.length; i++) {
    if (array[i] > newArray[0]) {
      newArray[0] = array[i];
    } else {
      continue;
    }
  }
  return newArray[0];
}

const testArrayOne = [15, 100, 250, 300, 2];

console.log(largestNum(testArrayOne));
