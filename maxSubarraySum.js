/* 
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.


*/


var maxSequence = function(arr){
    // ...

    const negatives = arr.every(num=> num < 0)
    
    if(negatives) return 0

    const positives = arr.every(num=> num >= 0)

    if(positives){
        return arr.reduce((a, b)=> a + b, 0)
    }

    let copyArr = [...arr]
    let sum = 0



    while(copyArr.length > 0){
        let newSum = []
        console.log(copyArr.slice(0, -1))
        newSum.push(copyArr.reduce((a,b)=> a+b, 0))
        newSum.push(copyArr.slice(0, -1).reduce((a,b)=> a+b,0))
        newSum.push(copyArr.slice(1).reduce((a,b)=> a+b,0))
        debugger
        if(Math.max(...newSum) > sum){
            sum = Math.max(...newSum)
        }

        copyArr.pop()
        copyArr.shift()
        debugger
        
        
    }



    return sum

  }
