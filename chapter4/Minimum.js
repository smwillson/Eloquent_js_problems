/*
The previous chapter introduced the standard function Math.min that returns
its smallest argument. We can build something like that now. Write a function
min that takes two arguments and returns their minimum.
*/

function minimum(number1, number2) {

return (number1 < number2) ? number1 : number2 ;

}

console.log(`Mimimum number is ${minimum(3,4)}`);
