/* 
Your task, is to create NxN multiplication table, 
of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: 
[[1,2,3],[2,4,6],[3,6,9]]

*/
multiplicationTable = function(size) {
    // insert code here
    
    console.log(size)
    let arr = []
    let start = 1
    let counter = 0
    
    while(counter < size){
      let result = []
      for(let i = start; i < start + (size*start); i+=start){
        result.push(i)  
      } 
      arr.push(result)
      result = []
      counter++
      start++
    }
  
    return arr
    }