/*


A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/

function isPangram(string) {
    let sumOfAlphabet = 2847;
  
    let strToLower = string.toLowerCase();
    let cache = {};
    let unique = strToLower.split('').filter((str) => {
      cache[str] = (cache[str] || 0) + 1;
  
      return cache[str] <= 1;
    });
  
    let result = 0;
  
    for (let i = 0; i < unique.length; i++) {
      if (unique[i].charCodeAt() >= 97 && unique[i].charCodeAt() <= 122) {
        result += unique[i].charCodeAt();
      }
    }
  
    return sumOfAlphabet === result ? true : false;
  }