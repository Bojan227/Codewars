/* 
Help the frog to find a way to freedom
You have an array of integers and have a frog at the first position

[Frog, int, int, int, ..., int]

The integer itself may tell you the length and the direction of the jump

For instance:
 2 = jump two indices to the right
-3 = jump three indices to the left
 0 = stay at the same position
Your objective is to find how many jumps are needed to jump out of the array.

Return -1 if Frog can't jump out of the array

Example:
array = [1, 2, 1, 5]; 
jumps = 3  (1 -> 2 -> 5 -> <jump out>)

*/

function solution(a) {
    if (a[0] < 0) return 1;
    if (a.length === 1 && a[0] === 0) return -1;
    if (a.length === 1 && a[0] !== 0) return 1;
    let sum = a.reduce((acc, curr) => (acc += curr), 0);
    if (sum === 0) return -1;
  
    let start = 0;
    let counter = 0;
  
    let visitedIndexes = [];
  
    const length = a.length;
    // Your code here
  
    while (start < length) {
      if (visitedIndexes.indexOf(start) >= 0) {
        return -1;
      }
      visitedIndexes.push(start);
      start += a[start];
      counter++;
      if (start < 0) {
        return counter;
      }
    }
  
    return counter;
  }
