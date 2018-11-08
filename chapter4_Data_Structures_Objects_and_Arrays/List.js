/*
Write a function arrayToList that builds up a list structure like the one
shown when given [1, 2, 3] as argument. Also write a listToArray function
that produces an array from a list. Then add a helper function prepend, which
takes an element and a list and creates a new list that adds the element to the
front of the input list, and nth, which takes a list and a number and returns
the element at the given position in the list (with zero referring to the first
element) or undefined when there is no such element.
If you haven’t already, also write a recursive version
*/

//This function creates a linked list
function arrayToList(arrayToConvert) {
  let linkedList = null;
  if (arrayToConvert.length > 0) {
    linkedList = {};
    linkedList.value = arrayToConvert[0];
    arrayToConvert.shift(); //remove the zeroth element of the array
    linkedList.rest = arrayToList(arrayToConvert);
  }

  return (linkedList);
}
let newList = arrayToList([1, 2, 3, 4]);
console.log("List from Array:");
console.log(newList);

//This function creates a array of values from a given list
function listToArray(listToConvert) {
  let arrayOfElements = [];
  if (listToConvert !== null && typeof(listToConvert) === 'object') {

    let keys = Object.keys(listToConvert);
    keys.forEach(function(key) {
      if (typeof(listToConvert[key]) !== 'object') {
        //if the current value is not an object push it in to the array
        arrayOfElements.push(listToConvert[key]);

      } else if(listToConvert[key] !== null) {
        arrayOfElements = arrayOfElements.concat(listToArray(listToConvert[key]));//recursive call
      }
    });
    return arrayOfElements;
  }
}

let newArray = listToArray(arrayToList([1, 2, 3, 4]));

console.log("Array from List:");
console.log(newArray);

/*function which
takes an element and a list and creates a new list that adds the element to the
front of the given list*/
function prepend(item, list) {

  let linkedList = {};
  linkedList.value = item;
  linkedList.rest = list;
  return linkedList;
}
let prependList = prepend(10, (arrayToList([1, 2, 3, 4])));
console.log("New list is:");
console.log(prependList);

/*function that returns
 *the element at the given position in the list (with zero referring to the first
 *element) or undefined when there is no such element */

function nth(list, num) {

  let linkedListArray = listToArray(list);
  return (!(num < 0 || num > linkedListArray.length)) ? linkedListArray[num] : 'undefined';

}
console.log("List item is:")
console.log(nth(arrayToList([100, 200, 300]), 1));

let obj1 = {
  a: 'somestring',
  b: 42,
  c: {
    1: 'one',
    2: {
      4: 'Three',
      5:{
        6:'six',
        7: null
      }
    }
  }
};

let newArray1 = listToArray(obj1);
console.log("Array from List:");
console.log(newArray1);
/*
OUTPUT:

C:\eloquent_js\Eloquent_js_problems\chapter4_Data_Structures_Objects_and_Arrays>node List.js
List from Array:
{ value: 1,
  rest: { value: 2, rest: { value: 3, rest: [Object] } } }
Array from List:
[ 1, 2, 3, 4 ]
New list is:
{ value: 10,
  rest: { value: 1, rest: { value: 2, rest: [Object] } } }
List item is:
200

*/
