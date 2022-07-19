/* 
Assume "#" is like a backspace in string. 
This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""

*/

function cleanString(s) {
    if(s === '')return ''
    let hashIndex = s.indexOf('#')
    if(hashIndex === 0){
      let newStr = s.slice(1)
      return cleanString(newStr)
    }else if(hashIndex === -1){
      return s
    }else{
      let newStr = `${s.slice(0, hashIndex - 1)}${s.slice(hashIndex+1)}`
      return cleanString(newStr)
    }
  }