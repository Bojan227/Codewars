/* 
There is an array of strings. All strings contains similar letters except one. Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 2 strings.


*/

function findUniq(arr) {
    // find the string with the lowest length
    let lowestLengthIndex = 0;
    let lowestLength = arr[0].length;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length < lowestLength) {
        lowestLength = arr[i];
        lowestLengthIndex = i;
      }
    }
  
    // find the char codes for each letter from the lowest length string
    const numbers = arr[lowestLengthIndex]
      .split('')
      .map((char) => char.toLowerCase().charCodeAt());
  
    let result = new Set();
  
    
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        let code = arr[i][j].toLowerCase().charCodeAt();
        if (!numbers.find((num) => num === code)) {
          result.add(arr[i]);
        }
      }
    }
    const [first] = result;
    if (result.size > 1) {
      return arr[lowestLengthIndex];
    }
  
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === first) {
        counter++;
      }
    }
  
    if (counter > 1) {
      return arr[lowestLengthIndex];
    } else {
      return first;
    }
  }