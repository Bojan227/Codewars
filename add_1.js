/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according 
to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears
earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x){
    let a = [...[...Array(26)].map(_=>(++i).toString(36),i=9).join``]
    let arr = x.split(' ')
    let tempArr = arr.map(y=>{
      return y.split('').map(x=>a.indexOf(x) + 1).reduce((a,b)=>a + b, 0)
    })
  
    return arr[tempArr.indexOf(Math.max(...tempArr))]
    }