/*
You are given an input string.

For each symbol in the string if it's the first character occurrence, replace it with a '1', else replace it with the amount of times you've already seen it.

Examples:
input   =  "Hello, World!"
result  =  "1112111121311"

input   =  "aaaaaaaaaaaa"
result  =  "123456789101112"
There might be some non-ascii characters in the string.

*/

function numericals(s) {
    let result = '';
    [...s].reduce((acc, curr) => {
      if (!acc[curr]) {
        acc[curr] = 0;
      }
      result += acc[curr] += 1;
      return acc;
    }, {});
    return result;
  }
  