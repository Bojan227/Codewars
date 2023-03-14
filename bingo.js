/* 
Given a random bingo card and an array of called numbers, determine if you have a bingo!

Parameters: card and numbers arrays.

Example input:

card = [
  ['B', 'I', 'N', 'G', 'O'],
  [1, 16, 31, 46, 61],
  [3, 18, 33, 48, 63],
  [5, 20, 'FREE SPACE', 50, 65],
  [7, 22, 37, 52, 67],
  [9, 24, 39, 54, 69]
]

numbers = ['B1', 'I16', 'N31', 'G46', 'O61']
Output: true if you have a bingo, false if you do not.

You have a bingo if you have a complete row, column, or diagonal - each consisting of 5 numbers, or 4 numbers and the FREE SPACE.

Constraints:
Each column includes 5 random numbers within a range (inclusive):
'B':  1 - 15
'I': 16 - 30
'N': 31 - 45
'G': 46 - 60
'O': 61 - 75

Notes:
All numbers will be within the above ranges.
FREE SPACE will not be included in the numbers array but always counts towards a bingo.
The first array of the card is the column headers.
numbers array will include only tiles present in the card, without duplicates.
Examples:
card:
------------------------------
| B  | I  |   N    | G  | O  |
==============================
| 2  | 17 |   32   | 47 | 74 |
------------------------------
| 14 | 25 |   44   | 48 | 62 |
------------------------------
| 5  | 22 | 'FREE' | 49 | 67 |
------------------------------
| 10 | 23 |   45   | 59 | 73 |
------------------------------
| 1  | 30 |   33   | 58 | 70 |
------------------------------

numbers: ['N32', 'N45', 'B7', 'O75', 'N33', 'N41, 'I18', 'N44']

// return true - you have bingo at ['N32', 'N44', 'FREE', 'N45', 'N33']

*/

function bingo(card, numbers) {
  let draw = [0];
  numbers.forEach((number) => draw.push(parseInt(number.slice(1)) || 0)); // eliminate letters in drawn numbers and taransform free space into zero
  // console.log(draw);
  let horizontal = card.slice(1); // eliminate first row of letters
  // console.log(horizontal);
  let vertical = horizontal[0].map((_, c) => horizontal.map((r) => r[c])); // add horizontal arrays by concatenanting its transpose
  // console.log(vertical);
  let diagonal1 = [horizontal.map((row, index) => row[index])]; // extract diagonal from horizontal arrays
  // console.log(diagonal1);
  let diagonal2 = [
    horizontal.map((row, index) => row[horizontal.length - 1 - index]),
  ]; // extract diagonal from horizontal arrays
  // console.log(diagonal2);
  let hand = [].concat(horizontal, vertical, diagonal1, diagonal2); // concatenates in one large array for testing wining match
  hand = hand.map((row) =>
    row.map((number) => (number == "FREE SPACE" ? 0 : number))
  ); // taransform free space into zero
  // console.log(hand);

  let result = hand
    .map((row) => row.every((tile) => draw.indexOf(tile) > -1))
    .reduce((result, test) => result || test, false);

  return result;
}
