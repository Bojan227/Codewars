/*This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.*/


function accum(s) {
    let toArray = s.split('')
    return toArray.map((x, i)=>x.repeat(i+1)).map(x=>{
      return `${x.charAt(0).toUpperCase()}${x.slice(1).toLowerCase()}`
    }).join('-')
  }