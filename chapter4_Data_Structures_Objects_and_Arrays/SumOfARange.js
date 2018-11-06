/*
The sum of a range

Write a range function that takes two arguments, start and end, and returns
an array containing all the numbers from start up to (and including) end.
Next, write a sum function that takes an array of numbers and returns the
sum of these numbers. Run the example program and see whether it does
indeed return 55.

*/
// We start by assigning a default value to the countBy variable in case user doesnt provide one, which is depenedent on the start and end values
function range(start, end, countBy = (start < end ) ? 1 : -1) {

  let numberArray = [];

  if (countBy >= 1) {
    for (let index = start, arrIndex = 0; index <= end; index += countBy) {

      numberArray[arrIndex++] = index;

    }
  } else {
    for (let index = start, arrIndex = 0; index >= end; index += countBy) {

      numberArray[arrIndex++] = index;

    }
  }

  return(numberArray);
}

function sum(numberArray) {

  let sum = 0;
  if (numberArray.length > 0) {

    for (let number of numberArray) {
      sum += number;
    }

  } else {
    console.log(`Empty array`);
    return `Undefined value can't be logged on console!`;
  }

  return sum;
}

console.log(sum(range(0, 10,3)));
