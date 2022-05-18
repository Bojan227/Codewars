/* Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" */
function solution(string) {
  
    let upperCaseLet = [0]
    let result = []
    let cache = {}
  

    // convert the string into an array
      string.split('').forEach(val=>{
        // find the indexes of uppercase letters from both sides
      if(val === val.toUpperCase()){
        let firstUpper = string.indexOf(val)
        let lastUpper = string.lastIndexOf(val)
        upperCaseLet.push(firstUpper)
        upperCaseLet.push(lastUpper)
      }
    })

    // sort the indexes and filter them to remain only unique indexes from the array
    
    let filtered = upperCaseLet.sort((a, b)=>a-b).filter(num=>{
      cache[num] = (cache[num]|| 0) + 1
  
      return cache[num] <=1
    })
  
    
    // slice the string from 0 to first index, from first index to second index etc....
    filtered.forEach((num, i)=>{

      result.push(string.slice(num, filtered[i + 1]))
  
    })
    return result.join(' ')
  }