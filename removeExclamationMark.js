/* 
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

function removeExclamationMarks(s) {
    let filteredArray = s.split(' ').map(value=>{
        return value.split('').filter(char=>char.toLowerCase() != char.toUpperCase()).join('')
     
  })
  return filteredArray.join(' ')
  }