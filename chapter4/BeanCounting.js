/*
Bean counting
You can get the Nth character, or letter, from a string by writing "string"[N].
The returned value will be a string containing only one character (for example,
"b"). The first character has position 0, which causes the last one to be found at
position string.length - 1. In other words, a two-character string has length
2, and its characters have positions 0 and 1.
Write a function countBs that takes a string as its only argument and returns
a number that indicates how many uppercase “B” characters there are in the
string.
Next, write a function called countChar that behaves like countBs, except
it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). Rewrite countBs to
make use of this new function.

*/


function countBs(stringToCheck){

  let numberofBs = 0;

  for(let index = 0; index < stringToCheck.length ; index++){

    if(stringToCheck[index] === 'B'){

      numberofBs++;
    }

  }
console.log(`${stringToCheck} has ${numberofBs} number of B's in it`);
}

countBs("AbBabababaBaBBBBBBaba");


function countChar(stringToCheck, charToCount){

  let charCount = 0;

  for(let index = 0; index < stringToCheck.length ; index++){

    if(stringToCheck[index] === charToCount){

      charCount++;
    }

  }
  console.log(`${stringToCheck} has ${charCount} number of ${charToCount}'s in it`);

}
countChar("AbBabababaBaBBBBBBaba",'a');
