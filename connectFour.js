function connectFour(board) {
  // Your code goes here

  function checkColumns() {
    for (let i = 0; i < board.length - 3; i++) {
      let validMoves = [i, i + 1, i + 2, i + 3];
      let row = board[i];
      for (let j = 0; j < row.length; j++) {
        let decidedValue = row[j];

        if (
          decidedValue !== "-" &&
          validMoves.every((move) => board[move][j] === decidedValue)
        ) {
          debugger;
          return decidedValue;
        }
      }
    }
  }

  function checkRows() {
    for (let i = 0; i < board.length; i++) {
      let row = board[i];
      for (let j = 0; j < row.length; j++) {
        let validMoves = [j, j + 1, j + 2, j + 3];
        let decidedValue = row[j];
        let notValid = [4, 5, 6];

        if (notValid.includes(j)) continue;

        debugger;
        if (
          decidedValue !== "-" &&
          validMoves.every((move) => board[i][move] === decidedValue)
        ) {
          debugger;
          return decidedValue;
        }
      }
    }
  }

  function checkHorizontal() {
    for (let i = 0; i < board.length; i++) {
      let moveDown = [i, i + 1, i + 2, i + 3];
      let movesUp = [i, i - 1, i - 2, -3];

      let row = board[i];
      for (let j = 0; j < row.length; j++) {
        let movesLeft = [j, j - 1, j - 2, j - 3];
        let movesRight = [j, j + 1, j + 2, j + 3];

        let decidedValue = row[j];
        debugger;

        if (!moveDown.find((value) => value > board.length - 1)) {
          // down left

          if (
            decidedValue !== "-" &&
            moveDown.every(
              (move, i) => board[move][movesLeft[i]] === decidedValue
            )
          ) {
            debugger;
            return decidedValue;
          }

          // down Right
          if (
            decidedValue !== "-" &&
            moveDown.every(
              (move, i) => board[move][movesRight[i]] === decidedValue
            )
          ) {
            debugger;
            return decidedValue;
          }
        }

        if (!movesUp.find((value) => value < 0)) {
          //   up left
          if (
            decidedValue !== "-" &&
            movesUp.every(
              (move, i) => board[move][movesLeft[i]] === decidedValue
            )
          ) {
            debugger;
            return decidedValue;
          }

          // up right
          if (
            decidedValue !== "-" &&
            movesUp.every(
              (move, i) => board[move][movesRight[i]] === decidedValue
            )
          ) {
            debugger;
            return decidedValue;
          }
        }
      }
    }
  }

  const horizontalWinner = checkHorizontal();
  if (horizontalWinner) return horizontalWinner;
  const columnWinner = checkColumns();
  if (columnWinner) return columnWinner;
  const rowWinner = checkRows();
  if (rowWinner) return rowWinner;

  if (board.flat().some((value) => value === "-")) return "in progress";

  return "draw";
}
