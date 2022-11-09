/* 
Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

Examples
"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance"

*/

function balance(left, right) {
    //coding and coding....
    const leftSide = left
      .split('')
      .reduce((acc, val) => (acc += val === '!' ? 2 : 3), 0);
  
    const rightSide = right
      .split('')
      .reduce((acc, val) => (acc += val === '!' ? 2 : 3), 0);
  
    if (leftSide === rightSide) return 'Balance';
  
    return leftSide > rightSide ? 'Left' : 'Right';
  }
  