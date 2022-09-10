/* 
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

*/

function incrementString(string) {
    // if string === number
    if (!isNaN(parseInt(string))) {
      let zeros = '';
      let num = '';
  
      for (let i = 0; i < string.length; i++) {
        if (string[i].charCodeAt() === 48) {
          zeros += string[i];
        } else {
          num += string[i];
        }
      }
  
      if (num === '') {
        const length = zeros.length;
        zeros = zeros.slice(0, length - 1);
        return `${zeros}1`;
      } else if (num[num.length - 1] === '9') {
        if (zeros.length > 1 && num.length > zeros.length) {
          let repeat = num.length - zeros.length;
          return `${'0'.repeat(repeat)}${parseInt(num) + 1}`;
        } else if (zeros.length > 1 && zeros.length > num.length) {
          let repeat = zeros.length - num.length;
          return `${'0'.repeat(repeat)}${parseInt(num) + 1}`;
        }
      } else {
        return `${parseInt(num) + 1}`;
      }
    }
  
    // get starIndex of the number in the string
    let startIndex;
  
    for (let i = 0; i < string.length; i++) {
      console.log(string[i]);
      if (!isNaN(parseInt(string[i]))) {
        startIndex = i;
        break;
      }
    }
  
    // if there is no startIndex
    if (!startIndex) {
      return `${string}1`;
    }
  
    // divide the string and the number
    const firstPart = string.slice(0, startIndex);
    const number = string.slice(startIndex);
  
    // count the zeros
    let zeros = '';
    let num = '';
  
    for (let i = 0; i < number.length; i++) {
      if (number[i].charCodeAt() === 48) {
        zeros += number[i];
      } else {
        num += number[i];
      }
    }
  
    if (num === '') {
      const length = zeros.length;
      zeros = zeros.slice(0, length - 1);
      return `${firstPart}${zeros}1`;
    } else if (num[num.length - 1] === '9') {
      if (zeros.length > 1 && num.length > zeros.length) {
        let repeat = num.length - zeros.length;
        return `${firstPart}${'0'.repeat(repeat)}${parseInt(num) + 1}`;
      } else {
        return `${firstPart}${parseInt(num) + 1}`;
      }
    } else {
      return `${firstPart}${zeros}${parseInt(num) + 1}`;
    }
  }