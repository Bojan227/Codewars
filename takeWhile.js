/* 
Here's another staple for the functional programmer. You have a sequence of values and some predicate for those values. You want to get the longest prefix of elements such that the predicate is true for each element. We'll call this the takeWhile function. It accepts two arguments. The first is the sequence of values, and the second is the predicate function. The function does not change the value of the original sequence.

Example:
sequence : [2,4,6,8,1,2,5,4,3,2]
predicate: is an even number
result   : [2,4,6,8]
Your task is to implement the takeWhile function.
*/

function takeWhile(arr, pred) {
    return arr.reduce((acc, curr, i, arr) => {
      if (!pred(curr)) arr.splice(1);
      if (pred(curr)) acc.push(curr);
      return acc;
    }, []);
  }