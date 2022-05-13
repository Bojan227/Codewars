/*Take 2 strings s1 and s2 including only letters from ato z.
 Return a new sorted string, the longest possible, 
 containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"*/


function longest(s1, s2) {
    let cache = {}
    let uniqueArray = s1.split('').filter(n=>{
  
      cache[n] = (cache[n]||0) + 1;
  
      return cache[n] <= 1
    })
    let uniqueArrayTwo = s2.split('').filter(n=>{
  
      cache[n] = (cache[n]||0) + 1;
  
      return cache[n] <= 1
    })
    
    let finallArray = [...uniqueArray, ...uniqueArrayTwo]
    
    return finallArray.sort().join('')
    }