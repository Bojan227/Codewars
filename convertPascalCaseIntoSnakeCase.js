/*
Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

Examples
"TestController"  -->  "test_controller"
"MoviesAndBooks"  -->  "movies_and_books"
"App7Test"        -->  "app7_test"
1                 -->  "1"


*/

function toUnderscore(string) {
    if (!isNaN(string)) {
      return `${string}`;
    }
  
    let result = [];
    let nextSlice = 0;
  
    for (let i = 1; i < string.length; i++) {
      if (string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90) {
        result.push(
          string.slice(nextSlice, string.indexOf(string[i])).toLowerCase()
        );
        nextSlice = string.indexOf(string[i]);
      } else if (i + 1 === string.length) {
        result.push(string.slice(nextSlice).toLowerCase());
      }
    }
  
  
    return result.join('_');
  }