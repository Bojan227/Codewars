function streetFighterSelection(fighters, position, moves) {
  let [x, y] = position;
  let fightersHovered = [];

  const width = 6;

  moves.forEach((move) => {
    switch (move) {
      case "up":
        if (x !== 0) {
          x -= 1;
        }

        break;
      case "down":
        if (x != 1) {
          x += 1;
        }
        break;
      case "left":
        if (y == 0) {
          y = width - 1;
        } else {
          y -= 1;
        }
        break;
      case "right":
        if (y === width - 1) {
          y = 0;
        } else {
          y += 1;
        }
      default:
        break;
    }
    fightersHovered.push(fighters[x][y]);
  });

  return fightersHovered;
}
