/* 
For a given string s find the character c (or C) with longest consecutive 
repetition and return:

[c, l]
where l (or L) is the length of the repetition. 
If there are two or more characters with the same l return the 
first in order of appearance.

For empty string return:

["", 0]
In JavaScript: If you use Array.sort in your solution, 
you might experience issues with the random tests as 
Array.sort is not stable in the Node.js version used by CodeWars. 
This is not a kata issue.

Happy coding! :)

*/

function longestRepetition(s) {
    if (s === '') return ['', 0];
    let char = s[0];
    let repetations = [];
    let finalCount = 0;
    let count = 0;
  
    for (let i = 0; i < s.length; i++) {
      if (char === s[i + 1]) {
        count++;
      } else if (char !== s[i + 1]) {
        count++;
        if (count > finalCount) {
          finalCount = count;
          repetations.pop();
          repetations.push({ char, finalCount });
        }
  
        char = s[i + 1];
        count = 0;
      }
    }
    return [repetations[0].char, finalCount];
  }
  