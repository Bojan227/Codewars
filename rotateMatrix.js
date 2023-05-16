function rotate(matrix, direction) {
  if (direction === "counter-clockwise") {
    return matrix
      .reduce((grid, row, i) => {
        row.forEach((value, j) => {
          grid[j] = grid[j] || [];
          grid[j][i] = value;
        });

        return grid;
      }, [])
      .reverse();
  } else {
    return matrix
      .reduce((grid, row, i) => {
        row.forEach((value, j) => {
          grid[j] = grid[j] || [];
          grid[j][i] = value;
        });

        return grid;
      }, [])
      .map((row) => row.reverse());
  }
}
