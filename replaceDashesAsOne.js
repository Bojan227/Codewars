/* 
Task
If string has more than one neighboring dashes(e.g. --) replace they with one dash(-).

Dashes are considered neighbors even if there is some whitespace between them.

Example
For str = "we-are- - - code----warriors.-"

The result should be "we-are- code-warriors.-"

Input/Output
[input] string str

[output] a string

*/

function replaceDashesAsOne(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === "-") {
      while (
        str[i + 1] === "-" ||
        (str[i + 1] === " " && (str[i + 2] === " " || str[i + 2] === "-"))
      )
        i++;
    }
    result += char;
  }

  return result;
}
