'use strict';

function evenOdd(num) {
  if (num % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

for (let i = 0; i < 11; i++) {
  console.log(`${i} - ${evenOdd(i)}`);
}
