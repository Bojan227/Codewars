/* 
The function 'fibonacci' should return an array of fibonacci numbers. The function takes a number as an argument to decide how many no. of elements to produce. If the argument is less than or equal to 0 then return empty array

Example:

fibonacci(4) // should return  [0,1,1,2]
fibonacci(-1) // should return []
*/


function fibonacci(n) {
    if (n < 1) return [];
    let a = 0;
    let b = 1;
    let result = [a, b];
  
    while (result.length != n) {
      let c = a + b;
      result.push(c);
      a = b;
      b = c;
    }
  
    return result;
  }