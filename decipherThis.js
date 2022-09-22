/* 
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); //


*/

function decipherThis(str) {
    let result = []
    let firstLetter = ''
    let mid = ''
    let lastLetter = ''
    let secondLetter = ''
    let counter = 1

    for(let i = 0; i < str.length; i++){


        if(i+1 === str.length){
            lastLetter += str.charAt(str.length - 1)
            result.push(`${String.fromCharCode(parseInt(firstLetter))}${lastLetter}${mid}${secondLetter}`)
            break

        }

        if(!isNaN(parseInt(str.charAt(i)))) {
            firstLetter += str.charAt(i)
        } else if(str.charAt(i) === ' ' || i + 1 === str.length){
            
            result.push(`${String.fromCharCode(parseInt(firstLetter))}${lastLetter}${mid}${secondLetter}`)
            lastLetter = ''
            firstLetter = ''
            secondLetter = ''
            mid = ''
            counter = 1
        }else if(counter === 1){
            secondLetter += str.charAt(i)
            counter++

        }else if(str.charAt(i + 1) === ' ' || str.charAt(i + 1) === 'undefined')
            lastLetter += str.charAt(i)
        else{
            mid += str[i]
            counter++
        }

      
    }


   return result.join(' ')

    }; 