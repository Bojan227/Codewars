function tvRemote(words, state = "lowercase", startPosition = [0, 0]) {
  if (words.length === 0) return 0;

  const matrix = [
    ["a", "b", "c", "d", "e", "1", "2", "3"],
    ["f", "g", "h", "i", "j", "4", "5", "6"],
    ["k", "l", "m", "n", "o", "7", "8", "9"],
    ["p", "q", "r", "s", "t", ".", "@", "0"],
    ["u", "v", "w", "x", "y", "z", "_", "/"],
    ["aA", "SP", "", "", "", "", "", ""],
  ];

  const height = matrix.length;
  const width = matrix[0].length;

  let moves = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  let steps = 0;

  let wordToFind = "";

  let endPosition;
  let currentState = state;

  if (isUpperCase(words[0]) && currentState === "lowercase") {
    endPosition = findCharacterPosition(matrix, "aA");
  } else {
    endPosition = findCharacterPosition(matrix, words[0].toLowerCase());
  }

  let visited = new Map();
  let obj = {};
  let queue = [startPosition];

  while (wordToFind.length !== words.length) {
    const [x, y] = queue.shift();

    const key = `${x}_${y}`;

    if (Object.keys(obj).length === 0) {
      obj[key] = "No parent";
    }

    if (!visited.has(key)) {
      visited.set(key, true);
    } else continue;

    if (x === endPosition[0] && y === endPosition[1]) {
      if (endPosition[0] === 5 && endPosition[1] === 0) {
        currentState = currentState === "lowercase" ? "uppercase" : "lowercase";
      } else {
        if (endPosition[0] === 5 && endPosition[1] === 1) {
          wordToFind += " ";
        } else {
          wordToFind += matrix[endPosition[0]][endPosition[1]];
        }
      }

      steps += backtrackOrder(obj, `${endPosition[0]}_${endPosition[1]}`);

      if (endPosition[0] === 5 && endPosition[1] === 0) {
        return (steps += tvRemote(words, currentState, [
          endPosition[0],
          endPosition[1],
        ]));
      } else {
        return (steps += tvRemote(words.slice(1), currentState, [
          endPosition[0],
          endPosition[1],
        ]));
      }
    }

    for (let move of moves) {
      const nextX = x + move[0];
      const nextY = y + move[1];

      let newKey = `${nextX}_${nextY}`;

      if (nextX > -1 && nextX < height && nextY > -1 && nextY < width) {
        if (!visited.has(newKey)) {
          queue.push([nextX, nextY]);
          obj[newKey] = key;
        }
      }
    }
  }

  console.log(wordToFind);

  return steps;
}

function findCharacterPosition(matrix, char) {
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j] === char) {
        return [i, j];
      }
    }
  }
}

function isUpperCase(char) {
  if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
    return true;
  }
  return false;
}

function backtrackOrder(obj, endKey) {
  let tracker = [];

  while (obj[endKey]) {
    tracker.push(endKey);

    endKey = obj[endKey];
  }

  return tracker.length;
}
