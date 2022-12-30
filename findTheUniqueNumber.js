/*
Write a function called findUnique which returns the only unique number from an array.

All numbers in the unsorted array are present twice, except the one you have to find. The numbers are always valid integer values between 1 and 2147483647, so no need for type and error checking. The array contains at least one number and may contain millions of numbers. So make sure your solution is optimized for speed.

Example
Input:

[ 1, 8, 4, 4, 6, 1, 8 ]
Expected output:

6
*/
function findUnique(numbers) {
    // Return the unique number
    if(numbers.length === 1) return numbers[0]
    let cache = {}
  const filtered = numbers.filter(num=>{
        cache[num] = (cache[num] || 0) + 1

      if(cache[num] < 2) return cache[num]
    })

    console.log(filtered)

    for(let key in cache){
        
        if(cache[key] === 1) return parseInt(key)

    }


}
