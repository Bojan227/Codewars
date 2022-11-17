/* 
I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.

Passwords must abide by the following requirements:

More than 3 characters but less than 20.

Must contain only alphanumeric characters.

Must contain letters and numbers.

*/

function validPass(password) {
    if (password.length <= 3 || password.length > 19) return 'INVALID';
    let count = 0;
    let numbers = 0;
    let not_acceptable = 0;
  
    for (let i = 0; i < password.length; i++) {
  
      if (
        (password.charAt(i).charCodeAt() >= 97 &&
          password.charAt(i).charCodeAt() <= 123) ||
        (password.charAt(i).charCodeAt() >= 65 &&
          password.charAt(i).charCodeAt() <= 90)
      ) {
        count++;
      } else if (
        password.charAt(i).charCodeAt() >= 48 &&
        password.charAt(i).charCodeAt() <= 57
      ) {
        numbers++;
      } else {
        not_acceptable++;
      }
    }
  
    if (not_acceptable !== 0) return 'INVALID';
    if (numbers === 0) return 'INVALID';
    if (count === 0) return 'INVALID';
    return 'VALID';
  }