function findX(m) {
  //coding here...
  const height = m.length - 1;
  const width = m[0].length - 1;

  let gameState = null;
  let [currentX, currentY] = [Math.floor(height / 2), Math.floor(width / 2)];

  const visited = new Map("");

  while (true) {
    const square = m[currentX][currentY].split("");
    const direction = square[0];
    const steps = square.slice(1).join("");

    const stepsToTake = parseInt(steps);

    const key = `${currentX}_${currentY}`;

    if (visited.has(key)) {
      break;
    } else {
      visited.set(key, true);
    }

    switch (direction) {
      case "N":
        if (currentX - stepsToTake < 0) {
          gameState = true;
          break;
        }
        currentX -= stepsToTake;

        break;
      case "S":
        if (currentX + stepsToTake > height) {
          gameState = true;
          break;
        }
        currentX += stepsToTake;

        break;
      case "W":
        if (currentY - stepsToTake < 0) {
          gameState = true;
          break;
        }
        currentY -= stepsToTake;

        break;
      case "E":
        if (currentY + stepsToTake > width) {
          gameState = true;
          break;
        }
        currentY += stepsToTake;

        break;
      default:
        break;
    }

    if (gameState) {
      gameState = null;
      break;
    }

    if (m[currentX][currentY] === "X") {
      gameState = [currentX, currentY];
      break;
    }
  }

  return gameState;
}
