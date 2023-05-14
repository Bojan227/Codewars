function getGeneration(cells, generations) {
  let numberOfGenerations = generations;

  let board = cells.map((row, i) =>
    row.map((value, j) => new Cell(i, j, value))
  );

  while (numberOfGenerations !== 0) {
    if (numberOfGenerations !== generations) {
      board.forEach((row, i) => row.push(new Cell(i, row.length, 0)));
      board.push(
        Array.from(
          { length: board[0].length },
          (_, i) => new Cell(board.length, i, 0)
        )
      );
    }

    board.forEach((row) => row.forEach((cell) => cell.countNeighbours(board)));

    board.forEach((row) =>
      row.forEach((cell) => {
        if (cell.currentValue === 0) {
          if (cell.numberOfNeighbours === 3) {
            cell.currentValue = 1;
          }
        } else {
          if (cell.numberOfNeighbours < 2) {
            cell.currentValue = 0;
          } else if (cell.numberOfNeighbours > 3) {
            cell.currentValue = 0;
          } else if (
            cell.numberOfNeighbours === 2 ||
            cell.numberOfNeighbours === 3
          ) {
            cell.currentValue = cell.currentValue;
          }
        }
      })
    );

    numberOfGenerations -= 1;
  }
  let rows = [];

  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    if (row.every((cell) => cell.currentValue === 0)) continue;

    rows.push(row);
  }

  return checkColumns(rows).map((row) => row.map((cell) => cell.currentValue));
}

class Cell {
  constructor(x, y, currentValue) {
    this.x = x;
    this.y = y;
    this.currentValue = currentValue;
    this.numberOfNeighbours = 0;
  }

  countNeighbours(board) {
    let neighbours = 0;
    const width = board[0].length;
    const height = board.length;

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (
          this.x + i > -1 &&
          this.x + i < height &&
          this.y + j > -1 &&
          this.y + j < width
        ) {
          if (board[this.x + i][this.y + j].currentValue === 1) {
            neighbours += 1;
          }
        }
      }
    }

    this.numberOfNeighbours =
      this.currentValue === 1 ? neighbours - 1 : neighbours;
  }
}

function checkColumns(board) {
  let columns = [];

  const convertToColumns = board.reduce((gridElement, row, i) => {
    row.forEach((cell, j) => {
      gridElement[j] = gridElement[j] || [];
      gridElement[j][i] = cell;
    });

    return gridElement;
  }, []);

  for (let i = 0; i < convertToColumns.length; i++) {
    const row = convertToColumns[i];
    if (row.every((cell) => cell.currentValue === 0)) continue;

    columns.push(row);
  }

  return columns.reduce((gridElement, row, i) => {
    row.forEach((cell, j) => {
      gridElement[j] = gridElement[j] || [];
      gridElement[j][i] = cell;
    });

    return gridElement;
  }, []);
}
