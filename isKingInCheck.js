// const chessboard = [
//   [" ", " ", " ", " ", " ", " ", " ", " "],
//   [" ", " ", " ", " ", " ", " ", " ", " "],
//   [" ", " ", " ", " ", "♟", " ", " ", " "],
//   [" ", " ", " ", " ", " ", " ", " ", " "],
//   [" ", "♟", " ", "♔", " ", " ", " ", " "],
//   [" ", " ", " ", " ", " ", "♞", " ", " "],
//   [" ", " ", " ", " ", " ", " ", " ", " "],
//   [" ", " ", " ", " ", "♝", "♛", " ", " "],
// ];
function kingIsInCheck(chessboard) {
  const pieces = {
    "♔": "",
    "♛": "all",
    "♝": "diagonal",
    "♞": "L",
    "♜": "straight",
    "♟": "one",
  };
  let kingsPosition = { x: undefined, y: undefined };
  let piecePosition = [];

  let state = false;

  chessboard.forEach((piece, i) => {
    piece.forEach((inner, j) => {
      if (inner === "♔") {
        kingsPosition["x"] = i;
        kingsPosition["y"] = j;
      } else if (inner !== "♔" && inner !== " ") {
        let newPiece = {
          pieceX: i,
          pieceY: j,
        };
        piecePosition.push(newPiece);
      }
    });
  });

  for (let i = 0; i < piecePosition.length; i++) {
    if (state) return true;

    let currentPiece =
      pieces[
        chessboard[piecePosition[i]["pieceX"]][piecePosition[i]["pieceY"]]
      ];

    if (currentPiece === "straight") {
      straight(piecePosition[i]);
    } else if (currentPiece === "L") {
      knight(piecePosition[i]);
    } else if (currentPiece === "one") {
      one(piecePosition[i]);
    } else if (currentPiece === "diagonal") {
      diagonal(piecePosition[i]);
    } else if (currentPiece === "all") {
      queen(piecePosition[i]);
    } else return false;
  }

  function checkLeft(x, y) {
    for (let i = y - 1; i >= 0; i--) {
      if (chessboard[x][i] && chessboard[x][i] === "♔") {
        return true;
      } else if (
        chessboard[x][i] &&
        chessboard[x][i] !== "♔" &&
        chessboard[x][i] !== " "
      ) {
        break;
      }
    }
    return false;
  }

  function checkRight(x, y) {
    for (let i = y + 1; i <= 7; i++) {
      if (chessboard[x][i] && chessboard[x][i] === "♔") {
        return true;
      } else if (
        chessboard[x][i] &&
        chessboard[x][i] !== "♔" &&
        chessboard[x][i] !== " "
      ) {
        break;
      }
    }

    return false;
  }

  function checkUp(x, y) {
    for (let i = x - 1; i >= 0; i--) {
      if (chessboard[i][y] && chessboard[i][y] === "♔") {
        return true;
      } else if (
        chessboard[i][y] &&
        chessboard[i][y] !== "♔" &&
        chessboard[i][y] !== " "
      ) {
        break;
      }
    }

    return false;
  }

  function checkDown(x, y) {
    for (let i = x + 1; i <= 7; i++) {
      if (chessboard[i][y] && chessboard[i][y] === "♔") {
        return true;
      } else if (
        chessboard[i][y] &&
        chessboard[i][y] !== "♔" &&
        chessboard[i][y] !== " "
      ) {
        break;
      }
    }

    return false;
  }

  function diagonalLeftDown(x, y) {
    for (let i = x + 1; i <= 7; i++) {
      y--;
      if (chessboard[i][y] && chessboard[i][y] === "♔") {
        return true;
      } else if (
        chessboard[i][y] &&
        chessboard[i][y] !== "♔" &&
        chessboard[i][y] !== " "
      ) {
        break;
      }
    }

    return false;
  }

  function diagonalRightDown(x, y) {
    for (let i = x + 1; i <= 7; i++) {
      y++;
      if (chessboard[i][y] && chessboard[i][y] === "♔") {
        return true;
      } else if (
        chessboard[i][y] &&
        chessboard[i][y] !== "♔" &&
        chessboard[i][y] !== " "
      ) {
        break;
      }
    }

    return false;
  }

  function diagonalLeftTop(x, y) {
    for (let i = x - 1; i >= 0; i--) {
      y--;
      if (chessboard[i][y] && chessboard[i][y] === "♔") {
        return true;
      } else if (
        chessboard[i][y] &&
        chessboard[i][y] !== "♔" &&
        chessboard[i][y] !== " "
      ) {
        break;
      }
    }

    return false;
  }

  function diagonalRightTop(x, y) {
    for (let i = x - 1; i >= 0; i--) {
      y++;
      if (chessboard[i][y] && chessboard[i][y] === "♔") {
        return true;
      } else if (
        chessboard[i][y] &&
        chessboard[i][y] !== "♔" &&
        chessboard[i][y] !== " "
      ) {
        break;
      }
    }

    return false;
  }

  function queen(piece) {
    const { x, y } = kingsPosition;
    const { pieceX, pieceY } = piece;

    const results = [
      diagonalLeftDown(pieceX, pieceY),
      diagonalRightDown(pieceX, pieceY),
      diagonalLeftTop(pieceX, pieceY),
      diagonalRightTop(pieceX, pieceY),
      checkLeft(pieceX, pieceY),
      checkRight(pieceX, pieceY),
      checkUp(pieceX, pieceY),
      checkDown(pieceX, pieceY),
    ];

    state = results.some((result) => result === true);
  }

  function diagonal(piece) {
    const { x, y } = kingsPosition;
    const { pieceX, pieceY } = piece;

    const results = [
      diagonalLeftDown(pieceX, pieceY),
      diagonalRightDown(pieceX, pieceY),
      diagonalLeftTop(pieceX, pieceY),
      diagonalRightTop(pieceX, pieceY),
    ];

    state = results.some((result) => result === true);
  }

  function straight(piece) {
    const { x, y } = kingsPosition;
    const { pieceX, pieceY } = piece;

    const results = [
      checkLeft(pieceX, pieceY),
      checkRight(pieceX, pieceY),
      checkUp(pieceX, pieceY),
      checkDown(pieceX, pieceY),
    ];

    state = results.some((result) => result === true);
  }

  function one(piece) {
    const { pieceX, pieceY } = piece;

    if (
      chessboard[pieceX + 1][pieceY - 1] === "♔" ||
      chessboard[pieceX + 1][pieceY + 1] === "♔"
    )
      state = true;
  }

  function knight(piece) {
    const { x, y } = kingsPosition;
    const { pieceX, pieceY } = piece;

    if (
      (pieceX + 2 === x && pieceY - 1 === y) ||
      (pieceX + 2 === x && pieceY + 1 === y) ||
      (pieceX - 2 === x && pieceY + 1 === y) ||
      (pieceX - 2 === x && pieceY - 1 === y) ||
      (pieceX + 1 === x && pieceY - 2 === y) ||
      (pieceX - 1 === x && pieceY + 2 === y) ||
      (pieceX + 1 === x && pieceY + 2 === y) ||
      (pieceX - 1 === x && pieceY - 2 === y)
    ) {
      state = true;
    }
  }

  return state; // do your magic :)
}
