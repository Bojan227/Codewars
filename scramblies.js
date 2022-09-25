/* 
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False

*/

function scramble(str1, str2) {
    if (str1.length < str2.length) return false;
    let toArrB = str2.split('');
    let count = 0;
    let cache = {};
  
    for (let i = 0; i < str1.length; i++) {
      cache[str1.charAt(i)] = (cache[str1.charAt(i)] || 0) + 1;
    }
  
    for (let i = 0; i < toArrB.length; i++) {
      if (cache[toArrB[i]]) {
        cache[toArrB[i]]--;
        count++;
      }
    }
  
    if (count === toArrB.length) return true;
  
    return false;
  }