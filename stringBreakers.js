/*
I will give you an integer (N) and a string. Break the string up into as many substrings of N as you can without spaces. If there are leftover characters, include those as well.

Example: 

N = 5;

String = "This is an example string";

Return value:
Thisi
sanex
ample
strin
g

Return value as a string: 'Thisi'+'\n'+'sanex'+'\n'+'ample'+'\n'+'strin'+'\n'+'g'

*/

function stringBreakers(n, string) {
    const joined = string.split('').filter((char) => char != ' ');
  
    let result = [];
    let tempStr = '';
  
    for (let i = 0; i < joined.length; i++) {
      if (tempStr.length === n) {
        result.push(tempStr);
        tempStr = '';
      }
      tempStr += joined[i];
      if (i + 1 === joined.length && tempStr.length > 0) {
        result.push(tempStr);
      }
    }
  
    return result.join('\n');
  }