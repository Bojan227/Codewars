/* 
Task
Complete function splitOddAndEven, accept a number n(n>0), return an array that contains the continuous parts of odd or even digits.

Please don't worry about digit 0, it won't appear ;-)

Examples
splitOddAndEven(123)  ===  [1,2,3]

splitOddAndEven(223)  ===  [22,3]

splitOddAndEven(111)  ===  [111]

splitOddAndEven(13579)  ===  [13579]

splitOddAndEven(135246)  ===  [135,246]

splitOddAndEven(123456)  ===  [1,2,3,4,5,6]

*/

function splitOddAndEven(n) {
    //coding here...
    let convertToNumArray = String(n).split('').map(Number);
    if (convertToNumArray.every((num) => num % 2 === 0)) return [n];
    if (convertToNumArray.every((num) => num % 2 !== 0)) return [n];
  
    let result = [];
    let tempNumberArray = [convertToNumArray[0]];
  
    for (let i = 1; i < convertToNumArray.length; i++) {
      if (
        convertToNumArray[i] % 2 === 0 &&
        tempNumberArray[tempNumberArray.length - 1] % 2 === 0
      ) {
        tempNumberArray.push(convertToNumArray[i]);
      } else if (
        convertToNumArray[i] % 2 === 0 &&
        tempNumberArray[tempNumberArray.length - 1] % 2 !== 0
      ) {
        result.push(parseInt(tempNumberArray.join('')));
        tempNumberArray = [convertToNumArray[i]];
      } else if (
        convertToNumArray[i] % 2 !== 0 &&
        tempNumberArray[tempNumberArray.length - 1] % 2 !== 0
      ) {
        tempNumberArray.push(convertToNumArray[i]);
      } else if (
        convertToNumArray[i] % 2 !== 0 &&
        tempNumberArray[tempNumberArray.length - 1] % 2 === 0
      ) {
        result.push(parseInt(tempNumberArray.join('')));
        tempNumberArray = [convertToNumArray[i]];
      }
    }
    if (tempNumberArray.length > 0) {
      result.push(parseInt(tempNumberArray.join('')));
    }
    return result;
  }