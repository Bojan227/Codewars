function reversiRow(moves) {
  //your code here
  let reversi = Array.from({ length: 8 }, () => ".");
  let currentTurn = 1;

  function flip(start, end, char) {
    if (reversi.slice(start, end).indexOf(".") === -1) {
      reversi.fill(char, start, end);
    }
  }
  let queue = [...moves];

  while (queue.length > 0) {
    const move = queue.shift();
    const char = currentTurn === 1 ? "*" : "O";

    const last = reversi.lastIndexOf(char, move);
    const next = reversi.indexOf(char, move);

    debugger;
    reversi[move] = currentTurn === 1 ? "*" : "O";

    if (last != -1) flip(last, move, char);
    if (next != -1) flip(move, next, char);

    currentTurn = currentTurn === 1 ? 2 : 1;
    debugger;
  }

  debugger;

  return reversi.join("");
}
