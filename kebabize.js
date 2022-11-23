/*
Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
Notes:

the returned string should only contain lowercase letters
*/

function kebabize(str) {
    let newStr = '';
  
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i).charCodeAt() >= 65 && str.charAt(i).charCodeAt() <= 90) {
        newStr += `-${str.charAt(i).toLowerCase()}`;
      } else if (
        str.charAt(i).charCodeAt() >= 97 &&
        str.charAt(i).charCodeAt() <= 123
      ) {
        newStr += str.charAt(i);
      }
    }
  
    if (newStr[0] === '-') return newStr.slice(1);
    return newStr;
  }