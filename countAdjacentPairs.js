/*
You know how sometimes you write the the same word twice in a sentence, but then don't notice that it happened? For example, you've been distracted for a second. Did you notice that "the" is doubled in the first sentence of this description?

As as aS you can see, it's not easy to spot those errors, especially if words differ in case, like "as" at the beginning of this sentence.

Write a function that counts the number of sections repeating the same word (case insensitive). The occurence of two or more equal words next after each other counts as one.

Examples
"dog cat"                  -->  0
"dog DOG cat"              -->  1
"apple dog cat"            -->  0
"pineapple apple dog cat"  -->  0
"apple apple dog cat"      -->  1
"apple dog apple dog cat"  -->  0
"dog dog DOG dog dog dog"  -->  1
"dog dog dog dog cat cat"  -->  2
"cat cat dog dog cat cat"  -->  3
*/

function countAdjacentPairs(searchString) {
    if(searchString.length === 0) return 0
    const toArray = searchString.split(' ')
    let counter = 0
    let occurrence = 0
    let first = toArray[0].toLowerCase()

    for(let i = 1; i < toArray.length; i++){
       

        if(first === toArray[i].toLowerCase()){
            occurrence++
            
        }else {
        
            if(occurrence >= 1){
                counter++
                occurrence = 0
            }
            first = toArray[i].toLowerCase()
        }
        
        if(i + 1 === toArray.length && occurrence >= 1){
            counter++

        }


    }


    return counter

}