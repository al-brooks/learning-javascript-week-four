'use strict';

// Searching an array and removing duplicate values
// Create a new array and move individual items over if they aren't currently in the array

const newArray = [];

function rmDuplicates(array) {
  for (let i = 0; i < array.length; i++) {
    if (newArray.includes(array[i])) {
      continue;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const testArrayOne = ['John', 'Mary', 'Alex', 'Steve', 'Mary'];
// Duplicate is Mary
const testArrayTwo = ['Alex', 'Mary', 'Alex', 'Steve', 'Alex'];
// Duplicate is Alex

// console.log(rmDuplicates(testArrayTwo));
