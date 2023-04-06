/*
Task
You're standing at the top left corner of an n × m grid and facing towards the right.

Then you start walking one square at a time in the direction you are facing.

If you reach the border of the grid or if the next square you are about to visit has already been visited, you turn right.

You stop when all the squares in the grid are visited. What direction will you be facing when you stop?

You can see the example of your long walk in the image below. The numbers denote the order in which you visit the cells.



Given two integers n and m, denoting the number of rows and columns respectively, find out the direction you will be facing at the end.

Output "L" for left, "R" for right, "U" for up, and "D" for down.

Example:
For n = 3, m = 3, the output should be "R".

This example refers to the picture given in the description. At the end of your walk you will be standing in the middle of the grid facing right.

Input/Output
[input] integer n
number of rows.

1 <= n <= 1000

[input] integer m
number of columns.

1 <= m <= 1000

[output] a string
The final direction.

*/

class Square {
  constructor(visited, x, y) {
    this.visited = visited;
    this.x = x;
    this.y = y;
  }
}

function directionInGrid(n, m) {
  //coding and coding..
  let grid = [];

  for (let i = 0; i < n; i++) {
    let tempGrid = [];
    for (let j = 0; j < m; j++) {
      tempGrid.push(new Square(false, i, j));
    }
    grid.push(tempGrid);
  }

  let currentDirection = "R";
  let visited = [];
  let x = 0;
  let y = 0;
  let previousX = 0;
  let previousY = 0;
  let previousDirection = "R";

  while (visited.length !== n * m) {
    if (!grid[x][y].visited) {
      grid[x][y].visited = true;
      visited.push(grid[x][y]);
    } else {
      if (previousDirection === "R") {
        currentDirection = "D";
      } else if (previousDirection === "D") {
        currentDirection = "L";
      } else if (previousDirection === "L") {
        currentDirection = "U";
      } else {
        currentDirection = "R";
      }

      x = previousX;
      y = previousY;
    }

    if (visited.length === n * m) {
      break;
    }
    previousX = x;
    previousY = y;
    previousDirection = currentDirection;

    if (currentDirection === "R") {
      if (y + 1 === m && x === 0) {
        currentDirection = "D";
        x = x + 1;
      } else {
        y = y + 1;
      }
    } else if (currentDirection === "D") {
      if (x + 1 === n && y + 1 === m) {
        currentDirection = "L";
        y = y - 1;
      } else {
        x = x + 1;
      }
    } else if (currentDirection === "L") {
      if (x + 1 === n && y === 0) {
        currentDirection = "U";
        x = x - 1;
      } else {
        y = y - 1;
      }
    } else if (currentDirection === "U") {
      if (x === 0 && y === 0) {
        currentDirection = "R";
        x = x + 1;
      } else {
        x = x - 1;
      }
    }
  }

  return currentDirection;
}
