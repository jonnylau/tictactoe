let board = [
  ["","",""],
  ["","",""],
  ["","",""],
];

let currentPlayer = 'X';


let placePiece = (row,col) => {
  // test if row, col <= 3 ? : console.log('pick another square'); 
  if (row > 3 || col > 3) {
    console.log('Pick another Square');
    return;
  } else if (board[row - 1][col - 1] !== "") {
    console.log('position taken');
    return;
  } else {
  // place the current Player as value on board [row - 1][col - 1] if there's not already a marker on the position.
    board[row-1][col-1] = currentPlayer;
    currentPlayer = (currentPlayer === 'X') ? 'O' : null;
    // change currentPlayer 
    return; 
  }
}
placePiece(2,2);
console.log(board);
console.log(currentPlayer);

let gameOver = () => {
  // iterate through every row
  // keep a counter for 'x' and 'o'
  // if the either counter === 3 -> declare winner
  // iterate through every column
  // keep a counter for 'x' and 'o'
  // if the either counter === 3 -> declare winner
};