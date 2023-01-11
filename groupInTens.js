/*

Write a function groupIn10s which takes any number of arguments, groups them into tens, and sorts each group in ascending order.

The return value should be an array of arrays, so that numbers between 0 and9 inclusive are in position 0, numbers between 10 and 19 are in position 1, etc.

Here's an example of the required output:

const grouped = groupIn10s(8, 12, 38, 3, 17, 19, 25, 35, 50) 

grouped[0]     // [3, 8]
grouped[1]     // [12, 17, 19]
grouped[2]     // [25]
grouped[3]     // [35, 38]
grouped[4]     // undefined
grouped[5]     // [50]
*/

function groupIn10s(...args) {
    let copyArgs = [...args].sort((a, b) => a - b);
    let min = 0;
    let max = 9;
    let result = [];
    let innerArr = [];
    for (let i = 0; i < copyArgs.length; i++) {
      if (copyArgs[i] >= min && copyArgs[i] <= max) {
        innerArr.push(copyArgs[i]);
      } else {
        result.push(innerArr);
        innerArr = [];
        i--;
        min = max + 1;
        max = max + 10;
      }
    }
    if (innerArr.length !== 0) result.push(innerArr);
  
    return result.map((arr) => (arr.length === 0 ? undefined : arr));
  }
  