function escape(maze) {
  const dirs = {
    "0,1": { dir: ">", "<": "BF", ">": "F", "^": "RF", v: "LF" },
    "0,-1": { dir: "<", "<": "F", ">": "BF", "^": "LF", v: "RF" },
    "1,0": { dir: "v", "<": "LF", ">": "RF", "^": "BF", v: "F" },
    "-1,0": { dir: "^", "<": "RF", ">": "LF", "^": "F", v: "BF" },
  };

  function Node(i, j, dir, path) {
    this.i = i;
    this.j = j;
    this.dir = dir;
    this.path = path;
  }

  let startNode;
  const n = maze.length;
  const m = maze[0].length;
  const space = maze.map((row, i) =>
    row.split("").map((c, j) => {
      if (c !== "#" && c !== " ") {
        startNode = new Node(i, j, c, "");
      }
      return c === " ";
    })
  );

  const nodes = [startNode];
  const d = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  while (nodes.length > 0) {
    let cur = nodes.shift();
    debugger;
    for (let [di, dj] of d) {
      let i = cur.i + di;
      let j = cur.j + dj;

      debugger;

      if (i < 0 || i >= n || j < 0 || j >= m) {
        return (cur.path + dirs[[di, dj]][cur.dir]).split("");
      }
      debugger;
      if (!space[i][j]) {
        continue;
      }

      debugger;
      space[i][j] = false;
      let dir = dirs[[di, dj]];
      let next = new Node(i, j, dir.dir, cur.path + dir[cur.dir]);
      debugger;
      nodes.push(next);
      debugger;
    }
  }

  return [];
}
