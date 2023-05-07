function checkeredBoard(dimension) {
  const squares = {
    0: "□",
    1: "■",
  };

  let result = `${dimension % 2 === 0 ? squares[0] : squares[1]} `;

  let currentSquareId = dimension % 2 === 0 ? 0 : 1;

  for (let i = 1; i < dimension * dimension; i++) {
    let currentSquare = currentSquareId === 0 ? squares[1] : squares[0];

    //check if it's last loop
    if (i + 1 === dimension * dimension) {
      result += currentSquare;
    } else if ((i % dimension) + 1 === dimension) {
      // last position of current row
      result += currentSquare + "\n";

      // even dimension start with same square on the next row else start with different square
      if (dimension % 2 === 0) {
        currentSquareId = currentSquareId === 0 ? 1 : 0;
      } else {
        currentSquareId = currentSquareId === 0 ? 0 : 1;
      }
    } else {
      result += `${currentSquare} `;
    }

    currentSquareId = currentSquareId === 0 ? 1 : 0;
  }

  return result;
}
