/*
An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters. An example of this is "angel", which is an anagram of "glean".

Write a function that receives an array of words, and returns the total number of distinct pairs of anagramic words inside it.

Some examples:

There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]

*/

function anagramCounter(wordsArray) {
    const convertToWordsArray = wordsArray.map((word) => word.split(''));
    const sortedWords = convertToWordsArray.map((wordArray) => wordArray.sort());
    const convertToWords = sortedWords.map((wordsArray) => wordsArray.join(''));
  
    const cache = convertToWords.reduce((obj, curr) => {
      if (!obj[curr]) {
        obj[curr] = 0;
      }
      obj[curr] = obj[curr] + 1;
  
      return obj;
    }, {});
  
    let counter = 0;
    for (key in cache) {
      counter += (cache[key] * (cache[key] - 1)) / 2;
    }
    return counter;
  }