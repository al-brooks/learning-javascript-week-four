'use strict';

const testArrayOne = [1, null, true, 'Hello', 'cat'];
const testArrayTwo = ['wow', 24, 35, 'she', 'house'];

function isIncluded(input) {
  return testArrayTwo.includes(input);
}

console.log(isIncluded('cat'));
