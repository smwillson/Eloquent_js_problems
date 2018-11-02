/*
Reversing an array
Arrays have a reverse method that changes the array by inverting the order in
which its elements appear. For this exercise, write two functions, reverseArray
and reverseArrayInPlace. The first, reverseArray, takes an array as argument
and produces a new array that has the same elements in the inverse order. The
second, reverseArrayInPlace, does what the reverse method does: it modifies
the array given as argument by reversing its elements. Neither may use the
standard reverse method.

*/


//Function that will create a new array with the given array's elements in reverse order

function reverseArray(arrayToReverse) {

  let reversedArray = [];

  if (arrayToReverse.length > 0) {

    for (let newIndex = 0, index = arrayToReverse.length - 1; index >= 0; index--) {

      reversedArray[newIndex++] = arrayToReverse[index];

    }
    console.log(reversedArray);

  }
}


//Function that will modify the original array
function reverseArrayInPlace(arrayToReverse) {

  if (arrayToReverse.length > 0) {
    let splicedArray = arrayToReverse.splice(0, arrayToReverse.length - 1);

    for (let index = splicedArray.length - 1; index >= 0; index--) {
      arrayToReverse.push(splicedArray[index]);
    }

  }
  return arrayToReverse;
}

console.log(reverseArrayInPlace([0, 3, 6, 9]));
