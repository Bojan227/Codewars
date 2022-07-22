/* 
Write a function that when given a number >= 0, 
returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
Note: the subarrays should be filled with 1s

*/

function pyramid(n) {
    let arr = []
    let item = 1
    for(let i = 0; i < n; i+=1){
      let newArr = []
      for(let j = 0; j < i+1; j++){
        newArr.push(item)
        
      }
      arr.push(newArr)
      newArr = []
    }
    
    return arr

  }