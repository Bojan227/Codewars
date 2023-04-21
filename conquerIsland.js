function conquerIsland(map) {
  //piratey code here

  const unoccupied = [];
  const marines = [];

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      const tile = map[i][j];

      if (tile === "u") {
        if (unoccupied.length > 0) {
          const [currentX, currentY] = unoccupied[unoccupied.length - 1];

          if (currentX + currentY > i + j) {
            unoccupied.pop();

            unoccupied.push([i, j]);
          } else if (currentX + currentY === i + j) {
            unoccupied.push([i, j]);
          }
        } else {
          unoccupied.push([i, j]);
        }
      } else if (tile === "m") {
        if (marines.length > 0) {
          const [currentX, currentY] = marines[marines.length - 1];
          if (currentX + currentY > i + j) {
            marines.pop();

            marines.push([i, j]);
          } else if (currentX + currentY === i + j) {
            marines.push([i, j]);
          }
        } else {
          marines.push([i, j]);
        }
      }
    }
  }

  //sort tiles
  function sortByRange(tiles) {
    return tiles.sort(([x, y], [nextX, nextY]) =>
      x + y > nextX + nextY ? 1 : -1
    );
  }
  // sort by x coordinate
  function sortByX(tiles) {
    return tiles.sort(([x, y], [nextX, nextY]) => (x > nextX ? 1 : -1));
  }

  //   check for same range
  function checkRange(tiles) {
    let result = [tiles[0]];
    for (let i = 1; i < tiles.length; i++) {
      let [x, y] = result[result.length - 1];
      let [nextX, nextY] = tiles[i];

      if (x + y === nextX + nextY) {
        result.push(tiles[i]);
      } else break;
    }

    return result;
  }
  if (unoccupied.length === 0 && marines.length === 0) return [];

  if (unoccupied.length > 0) {
    return sortByX(checkRange(sortByRange(unoccupied)));
  }

  return sortByX(checkRange(sortByRange(marines)));
}
