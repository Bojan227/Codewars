/* 
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!

*/

function dup(s) {
    let toArray = s.map((str) => str.split(''));
    let result = [];
    for (let i = 0; i < toArray.length; i++) {
      let sum = '';
      for (let j = 0; j < toArray[i].length; j++) {
        if (toArray[i][j] !== toArray[i][j + 1]) {
          sum += toArray[i][j];
        }
      }
      result.push(sum);
    }
    return result;
  }