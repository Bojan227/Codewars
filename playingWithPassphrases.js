/* 
Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

choose a text in capital letters including or not digits and non alphabetic characters,

shift each letter by a given number but the transformed letter must be a letter (circular shift),
replace each digit by its complement to 9,
keep such as non alphabetic and non digit characters,
downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
reverse the whole result.
Example:
your text: "BORN IN 2015!", shift 1

1 + 2 + 3 -> "CPSO JO 7984!"

4 "CpSo jO 7984!"

5 "!4897 Oj oSpC"

With longer passphrases it's better to have a small and easy program. Would you write it?

https://en.wikipedia.org/wiki/Passphrase

*/

function playPass(s, n) {
    let result = '';
    let toLowerCase = s.toLowerCase();
  
    console.log(toLowerCase);
  
    for (let i = 0; i < s.length; i++) {
      if (!isNaN(parseInt(toLowerCase.charAt(i)))) {
        console.log(parseInt(toLowerCase.charAt(i)));
        debugger;
        result += 9 - parseInt(toLowerCase.charAt(i));
      }
  
      if (
        toLowerCase.charAt(i).charCodeAt() < 48 ||
        (toLowerCase.charAt(i).charCodeAt() >= 58 &&
          toLowerCase.charAt(i).charCodeAt() <= 64)
      ) {
        result += toLowerCase.charAt(i);
      }
  
      if (toLowerCase.charAt(i).charCodeAt() + n > 122) {
        if (i % 2 === 0) {
          result += `${String.fromCharCode(
            97 + (toLowerCase.charAt(i).charCodeAt() + n - 122 - 1)
          )}`.toUpperCase();
        } else {
          result += `${String.fromCharCode(
            97 + (toLowerCase.charAt(i).charCodeAt() + n - 122 - 1)
          )}`.toLowerCase();
        }
      } else if (
        toLowerCase.charAt(i).charCodeAt() + n >= 97 &&
        toLowerCase.charAt(i).charCodeAt() + n <= 122
      ) {
        if (i % 2 === 0) {
          result += `${String.fromCharCode(
            toLowerCase.charAt(i).charCodeAt() + n
          )}`.toUpperCase();
        } else {
          result += `${String.fromCharCode(
            toLowerCase.charAt(i).charCodeAt() + n
          )}`.toLowerCase();
        }
      }
    }
  
    return result
      .split(' ')
      .reverse()
      .map((word) => {
        return word.split('').reverse().join('');
      })
      .join(' ');
  }
  
  