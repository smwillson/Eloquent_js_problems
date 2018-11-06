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

//This function creates an array of objects and sets the value property to the corresponding item of the given array
function arrayToList(arrayToCovert) {
  let listArray = [];
  if (arrayToCovert.length > 0) {

    arrayToCovert.forEach(function(element) {
      let listItem = {};
      listItem.value = element;
      listItem.rest = null;
      listArray.push(listItem);
    });
  }
  createLinkedList(listArray);
  return (listArray.shift());
}
//This function takes an array of object and connects them to create a linked list
function createLinkedList(listArray) {
  let index = 0;
  //iterate through the listArray and assign the next array item as the rest property of the current item
  listArray.forEach(function(listItem) {
    listItem.rest = (index < listArray.length - 1) ? listArray[++index] : null;
  });
  return listArray;
}
let newList = arrayToList([1, 2, 3, 4]);
console.log("List from Array:");
console.log(newList);

//This function creates a array of values from the given list
let elements = []; //global variable
function listToArray(list) {
  //extract the keys of the given object to an array
  var keys = [];
  for (var key in list) {
    if (list.hasOwnProperty(key)) keys.push(key);
  }
  keys.forEach(function(key) {
//add any non-object value to the elements array
    if (!(typeof(list[key]) == 'object')) {
      elements.push(list[key]);

    } else {
      return listToArray(list[key]); //recursive call
    }

  });

  return elements;
}

let newArray = listToArray(arrayToList([1, 2, 3, 4]));

console.log("Array from List:");
console.log(newArray);

/*function which
takes an element and a list and creates a new list that adds the element to the
front of the given list*/
function prepend(item, list) {

  let listItem = {};
  listItem.value = item;
  listItem.rest = list;
  return listItem;
}
let prependList = prepend(10, (arrayToList([1, 2, 3, 4])));
console.log("New list is:");
console.log(prependList);

/*function that returns
 *the element at the given position in the list (with zero referring to the first
 *element) or undefined when there is no such element */

function nth(list, num) {
  elements = []; //clear out any previous values of the global variable
  let listItemArray = listToArray(list);
  return (!(num < 0 || num > listItemArray.length)) ? listItemArray[num] : 'undefined';

}
console.log("List item is:")
console.log(nth(arrayToList([100, 200, 300]), 1));
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
