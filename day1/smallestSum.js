'use strict';

const newArray = [];

function smallestNum(array) {
  newArray.push(array[0]);

  for (let i = 0; i < array.length; i++) {
    if (array[i] < newArray[0]) {
      newArray[0] = array[i];
    } else {
      continue;
    }
  }

  return newArray[0];
}

const testArray = [19, 35, 50, 13, 100];

console.log(smallestNum(testArray));
