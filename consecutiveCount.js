/*
I want to know the size of the longest consecutive elements of X in Y. You will receive two arguments: items and key. Return the length of the longest segment of consecutive keys in the given items.

Notes:

The items and the key will be either an integer or a string (consisting of letters only)
If the key does not appear in the items, return 0
Examples
90000, 0           -->  4
"abcdaaadse", "a"  -->  3
"abcdaaadse", "z"  -->  0

*/

function getConsectiveItems(items, key){
    const convertToArray = String(items).split('')  
    const keyToString = key.toString()

    if(!convertToArray.includes(keyToString)) return 0
    let longest = 0
    let count = 0

    convertToArray.forEach(value=>{
        if(value === keyToString){
            count++
        }else{
            if(count > longest){
                longest = count
            }

            count = 0
        }
    })
    if(count > longest){
        return count
    }
    return longest
}