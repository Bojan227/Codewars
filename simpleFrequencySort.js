/* 
In this Kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
--we sort by highest frequency to lowest frequency. If two elements have same frequency, we sort by increasing value
More examples in test cases.

Good luck!

*/

function solve(arr){
    //..
    let cache = {}
    // let newArr = []

    for(let i = 0; i < arr.length; i++){

        cache[arr[i]] = (cache[arr[i]] || 0) + 1
    }

    arr = arr.sort((a,b) => {
        
          if(cache[a] === cache[b]){
            if(a > b){
                    return 1
              
              }else{
        return -1}
          
}
      
        if(cache[a] > cache[b]){
            return -1
        }else {
            return 1
        }

    })

    return arr


  }


// //   function solve(arr){
//   var r={}
//   for(var n of arr) r[n]=r[n]+1||1
//   return arr.slice().sort((a,b)=>r[b]-r[a]||a-b)
// }