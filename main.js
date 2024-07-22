const board = [[5, 4, 3, 2, 1], [], []];
const boardObject = {
  1: board[0],
  2: board[1],
  3: board[2],
};

// Creates initial board display. Assignment instructions say a map function must be used for board display, and that the board should be a 2D array.
board.map((peg) => console.log(`--- ${peg}`));

// Will display board after each change in gameplay. Assignment instructions says there should be an object responsible for maintaining the state of the board.
function displayBoard() {
  console.log("Current Board:");
  for (const peg in boardObject) {
    console.log(`${peg}: --- ${boardObject[peg]}`);
  }
}

function moveDisc(initialPeg, newPeg) {
  const initialArray = boardObject[initialPeg];
  const newArray = boardObject[newPeg];
  newArray.push(initialArray[initialArray.length - 1]);
  initialArray.splice(initialArray.length - 1);
}

moveDisc(1, 3);
displayBoard();
moveDisc(3, 2);
displayBoard();
moveDisc(1, 2);
displayBoard();
