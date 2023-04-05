/*
Task
You are watching a volleyball tournament, but you missed the beginning of the very first game of your favorite team. Now you're curious about how the coach arranged the players on the field at the start of the game.

The team you favor plays in the following formation:

0 3 0
4 0 2
0 6 0
5 0 1
where positive numbers represent positions occupied by players. After the team gains the serve, its members rotate one position in a clockwise direction, so the player in position 2 moves to position 1, the player in position 3 moves to position 2, and so on, with the player in position 1 moving to position 6.

Given the current formation of the team and the number of times k it gained the serve, find the initial position of each player in it.

Example
For

formation = [["empty",   "Player5", "empty"],
             ["Player4", "empty",   "Player2"],
             ["empty",   "Player3", "empty"],
             ["Player6", "empty",   "Player1"]]
and k = 2
the output should be

[
    ["empty",   "Player1", "empty"],
    ["Player2", "empty",   "Player3"],
    ["empty",   "Player4", "empty"],
    ["Player5", "empty",   "Player6"]
]
For

formation = [["empty", "Alice", "empty"],
             ["Bob",   "empty", "Charlie"],
             ["empty", "Dave",  "empty"],
             ["Eve",   "empty", "Frank"]]
and k = 6
the output should be

  [
    ["empty", "Alice", "empty"],
    ["Bob",   "empty", "Charlie"],
    ["empty", "Dave",  "empty"],
    ["Eve",   "empty", "Frank"]
]
Input
2D string array formation

A 4 × 3 array of strings representing names of the players in the positions corresponding to those in the schema above.

It is guaranteed that for each empty position the corresponding element of formation is "empty".

It is also guaranteed that there is no player called "empty" in the team.

Integer k

The number of times the team gained the serve.

Constraints: 0 ≤ k ≤ 1000000000.

Output
2D string array

Team arrangement at the start of the game.

*/

function volleyballPositions(formation, k) {
  let position1 = formation[0][1];
  let position2 = formation[1][0];
  let position3 = formation[1][2];
  let position4 = formation[3][0];
  let position5 = formation[2][1];
  let position6 = formation[3][2];

  // Reduce the number of iterations
  if (k > 6) {
    k = k % 6;
  }

  while (k > 0) {
    const previousPosition1 = position1;
    const previousPosition2 = position2;
    const previousPosition3 = position3;
    const previousPosition4 = position4;
    const previousPosition5 = position5;
    const previousPosition6 = position6;

    position6 = previousPosition5;
    position5 = previousPosition4;
    position4 = previousPosition2;
    position3 = previousPosition6;
    position2 = previousPosition1;
    position1 = previousPosition3;

    k--;
  }

  return [
    ["empty", position1, "empty"],
    [position2, "empty", position3],
    ["empty", position5, "empty"],
    [position4, "empty", position6],
  ];
}
