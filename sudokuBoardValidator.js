function validateSudoku() {
  const maxSum = 45;

  let rowCache = {};
  let columnCache = {};

  for (let i = 0; i < board.length; i++) {
    if (board[i].reduce((acc, curr) => acc + curr, 0) !== maxSum) return false;
    for (let j = 0; j < board[i].length; j++) {
      if (!rowCache[board[i][j]]) {
        rowCache[board[i][j]] = 0;
      }
      rowCache[board[i][j]] = rowCache[board[i][j]] + 1;
    }

    if (Object.keys(rowCache).length !== 9) return false;
    if (!Object.values(rowCache).every((value) => value === 1)) return false;
    rowCache = {};
  }

  let columnCells = cellsByColumn();

  function cellsByColumn() {
    let tempGrid = [];

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        tempGrid[j] = tempGrid[j] || [];
        tempGrid[i][j] = board[j][i];
      }
    }

    return tempGrid;
  }

  for (let i = 0; i < columnCells.length; i++) {
    if (columnCells[i].reduce((acc, curr) => acc + curr, 0) !== maxSum)
      return false;

    for (let j = 0; j < columnCells[i].length; j++) {
      if (!columnCache[columnCells[i][j]]) {
        columnCache[columnCells[i][j]] = 0;
      }
      columnCache[columnCells[i][j]] = columnCache[columnCells[i][j]] + 1;
    }

    if (Object.keys(columnCache).length !== 9) return false;
    if (!Object.values(columnCache).every((value) => value === 1)) return false;
    columnCache = {};
  }

  let count = 0;
  let firstBox = [];
  let secondBox = [];
  let thirdBox = [];
  let start = 0;
  let end = 3;
  let state = true;

  while (count !== 3) {
    for (let i = start; i < end; i++) {
      firstBox.push(...board[i].slice(0, 3));
      secondBox.push(...board[i].slice(3, 6));
      thirdBox.push(...board[i].slice(6, 9));
    }

    const firstBoxSum = firstBox.reduce((acc, curr) => acc + curr, 0);
    const secondBoxSum = secondBox.reduce((acc, curr) => acc + curr, 0);
    const thridBoxSum = thirdBox.reduce((acc, curr) => acc + curr, 0);

    if (
      firstBoxSum !== maxSum ||
      secondBoxSum !== maxSum ||
      thridBoxSum !== maxSum
    ) {
      state = false;
      break;
    }

    const firstBoxSet = new Set(firstBox);
    const secondBoxSet = new Set(firstBox);
    const thirdBoxSet = new Set(firstBox);

    if (
      firstBoxSet.size !== 9 ||
      secondBoxSet.size !== 9 ||
      thirdBoxSet.size !== 9
    ) {
      state = false;
      break;
    }

    firstBox = [];
    secondBox = [];
    thirdBox = [];

    start = end;
    end = end + 3;
    count++;
  }

  return state;
}
