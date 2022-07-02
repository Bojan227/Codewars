/* 
Build Tower
Build a pyramid-shaped tower given a positive integer number of floors.
A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

function towerBuilder(nFloors) {
    let tower = ''
    let result = []
    let counter = nFloors - 1
    let odd = 1
    for(let i = 0; i < nFloors; i+=1){
      tower+= ' '.repeat(counter)
      tower+= '*'.repeat(odd)
      tower+= ' '.repeat(counter)
      counter--
      odd+=2
      result.push(tower)
      tower = ''
    }
  
    return result
    
    }