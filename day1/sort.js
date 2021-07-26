'use strict';

function sortArray(array) {
  for (let i = 0; i < array.length; i++) {
    let swapped = false; // solution from GeeksforGeeks that helps optimize the sort by breaking the loop when all swaps are complete.
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;

        swapped = true;
      }
    }
    if (swapped == false) {
      break;
    }
  }

  return array;
}

const testArray = [2, 5, 1, 50, 7, 17];

console.log(sortArray(testArray));
