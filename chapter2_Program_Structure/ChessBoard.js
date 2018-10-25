/*
Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

*/

const INPUT = 8;

const CHAR_TO_PRINT = `#`;

let board = [];

for (let row = 0; row < INPUT; row++) {
  let boardRow = [];
  for (let column = 0; column < INPUT; column++) {

    boardRow[column] = (row % 2 === 0 && column % 2 === 0 ? " "
                                                                : (row % 2 !== 0 && column % 2 !== 0 ? " " : CHAR_TO_PRINT));

  }
  board.push(boardRow);
}
let stringToPrint = "";
for (let row = 0; row < board.length; row++) {
  for (let column = 0; column < board[0].length; column++) {

    stringToPrint = stringToPrint.concat(board[row][column]);

  }
  console.log(stringToPrint);
  stringToPrint = "";
}
