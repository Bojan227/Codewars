/* 
Complete the method which returns the number which is most frequent 
in the given input array. If there is a tie for most frequent number, 
return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

*/

function highestRank(arr){
    let cache = {}
    arr.forEach(num=>{
      cache[num] = (cache[num] || 0) + 1
    })
    let highest = 0
    let result = 0
  
    for(key in cache){
      if(cache[key] > highest){
        highest = cache[key]
        result = key
  
      }else if(cache[key] === highest){
        if(result < key){
          result = key
          highest = cache[key]
        }
      }
    }
    return parseInt(result)
    }