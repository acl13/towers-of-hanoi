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
  if (
    initialArray[initialArray.length - 1] < newArray[newArray.length - 1] ||
    newArray.length === 0
  ) {
    newArray.push(initialArray[initialArray.length - 1]);
    initialArray.splice(initialArray.length - 1);
  } else {
    console.log(
      "A disc cannot be moved to a peg if it is larger than the topmost disc on that peg. Please try again."
    );
  }
  displayBoard();
  checkWinner();
}

function checkWinner() {
  const winCondition = [5, 4, 3, 2, 1];
  if (
    boardObject[2].toString() === winCondition.toString() ||
    boardObject[3].toString() === winCondition.toString()
  ) {
    console.log("Congratulations! You win!");
    console.log("New Game:");
    resetBoard();
    displayBoard();
  }
}

function resetBoard() {
  boardObject[1] = [5, 4, 3, 2, 1];
  boardObject[2] = [];
  boardObject[3] = [];
}

function solvePuzzle(n, origin, destination, auxiliary) {
  const originArray = boardObject[origin];
  const destinationArray = boardObject[destination];

  if (n === 0) {
    return;
  }

  solvePuzzle(n - 1, origin, auxiliary, destination);

  const currentPeg = board.find((arr) => arr.includes(n));
  const currentDiscIndex = currentPeg.indexOf(n);
  destinationArray.push(currentPeg[currentDiscIndex]);
  originArray.splice(currentDiscIndex);
  displayBoard();

  solvePuzzle(n - 1, auxiliary, destination, origin);
}

solvePuzzle(5, 1, 3, 2);
checkWinner();

// This was my attempt at winning the game.
// moveDisc(1, 3);
// moveDisc(3, 2);
// moveDisc(1, 2);
// moveDisc(1, 3);
// moveDisc(2, 3);
// moveDisc(1, 2);
// moveDisc(3, 1);
// moveDisc(3, 2);
// moveDisc(1, 2);
// moveDisc(1, 3);
// moveDisc(2, 3);
// moveDisc(2, 1);
// moveDisc(3, 1);
// moveDisc(2, 3);
// moveDisc(1, 2);
// moveDisc(1, 3);
// moveDisc(2, 3);
// moveDisc(1, 2);
// moveDisc(3, 1);
// moveDisc(3, 2);
// moveDisc(1, 2);
// moveDisc(3, 1);
// moveDisc(2, 3);
// moveDisc(2, 1);
// moveDisc(3, 1);
// moveDisc(3, 2);
// moveDisc(1, 2);
// moveDisc(1, 3);
// moveDisc(2, 3);
// moveDisc(1, 2);
// moveDisc(3, 1);
// moveDisc(3, 2);
// moveDisc(1, 2);
