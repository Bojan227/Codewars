/*You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

"zero nine five two" -> "four"

If the string is empty or includes a number greater than 9, return "n/a" */


function averageString(str) {
    if (str.length === 0) return 'n/a';
    // Code away
    const newArr = str.split(' ');
    const stringsOfNumbers = [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
    ];
  
    let sum = 0;
  
    for (let i = 0; i < newArr.length; i++) {
      if (stringsOfNumbers.indexOf(newArr[i]) < 0) return 'n/a';
      sum += stringsOfNumbers.indexOf(newArr[i]);
    }
    let average = Math.floor(sum / newArr.length);
  
    return stringsOfNumbers[average];
  }