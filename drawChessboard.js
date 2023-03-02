/* 
Description:

A grid is a perfect starting point for many games (Chess, battleships, Candy Crush!).

Making a digital chessboard I think is an interesting way of visualising how loops can work together.

Your task is to write a function that takes two integers rows and columns and returns a chessboard pattern as a two dimensional array.

So chessBoard(6,4) should return an array like this:

[
    ["O","X","O","X"],
    ["X","O","X","O"],
    ["O","X","O","X"],
    ["X","O","X","O"],
    ["O","X","O","X"],
    ["X","O","X","O"]
]

And chessBoard(3,7) should return this:

[
    ["O","X","O","X","O","X","O"],
    ["X","O","X","O","X","O","X"],
    ["O","X","O","X","O","X","O"]
]

The white spaces should be represented by an: 'O'

and the black an: 'X'

The first row should always start with a white space 'O'


*/

function chessBoard(rows, columns) {
    let board = Array.from({length: rows}, ()=>[])  

     // Create a row with the correct length that starts with "O"
  const rowO = [...Array(columns)].map((_, i) => (i % 2 ? "X" : "O"));

  // Create a row with the correct length that starts with "X"
  const rowX = [...Array(columns)].map((_, i) => (i % 2 ? "O" : "X"));

  
  return board.map((_,i)=>i % 2 ?rowX: rowO )
}