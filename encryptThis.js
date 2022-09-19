/* 

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"

*/


var encryptThis = function (text) {
    // Implement me! :)
    if (text.length === 1) return `${text.charCodeAt()}`;
    let toArray = text.split(' ');
  
    return toArray
      .map((str) => {
        if (str.length === 1) {
          return str.charAt(0).charCodeAt();
        }
  
        const secondChar = str.charAt(1);
        const lastChar = str.charAt(str.length - 1);
        const rest = str.slice(2, str.length - 1);
  
        if (secondChar === lastChar && str.length === 2) {
          return str.charAt(0).charCodeAt() + lastChar;
        } else if (secondChar === lastChar &&  str.length > 2) {
          return str.charAt(0).charCodeAt() + lastChar + rest + secondChar;
        }
        return str.charAt(0).charCodeAt() + lastChar + rest + secondChar;
      })
      .join(' ');
  };