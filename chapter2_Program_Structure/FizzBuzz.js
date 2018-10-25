/*
Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for
numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
for numbers divisible by only one of those).
*/

const FIZZ = `fizz`;
const BUZZ = `buzz`;

let numberToPrint = 1;

for (let index = 0; index < 100; index++) {

  let divByThreeCheck = (numberToPrint % 3 === 0 ? true : false);

  let divByFiveCheck = (numberToPrint % 5 === 0 ? true : false);

  if (divByThreeCheck && divByFiveCheck) {
    console.log(FIZZ + BUZZ);
  } else if (divByThreeCheck) {
    console.log(FIZZ);
  } else if (divByFiveCheck) {
    console.log(BUZZ);
  } else {
    console.log(numberToPrint);
  }
  numberToPrint++;
}
