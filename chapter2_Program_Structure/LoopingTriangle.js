/*
*Looping a triangle
Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######
*/
let stringToPrint;

for (let index = 0; index < 7; index++) {
  printToConsole(index + 1);

}

function printToConsole(numberOfTimes) {
 stringToPrint = ``;

  for (let index = 0; index < numberOfTimes; index++) {
    stringToPrint += `#`;
  }
  console.log(stringToPrint);
};
