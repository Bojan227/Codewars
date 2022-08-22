/*
An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.

Example
findMissing([1, 3, 5, 9, 11]) == 7
PS: This is a sample question of the facebook engineer challenge on interviewstreet. I found it quite fun to solve on paper using math, derive the algo that way. Have fun!


*/

let findMissing = function (list) {
    const length = list.length;
    const lastTerm = list[list.length - 1];
    const secondToLastTerm = list[list.length - 2];
    const firstOc = lastTerm - secondToLastTerm;
  
    const secondOc = length - 1 - (length - 2);
    const d = firstOc / secondOc;
    console.log(d);
  
    for (let i = 0; i < list.length; i++) {
      if (list[i] + d !== list[i + 1]) {
        return list[i] + d;
      }
    }
  };