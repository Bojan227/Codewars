/* 
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]

*/

function parse( data ){
    function Deadfish(){
      let initialValue = 0
    
      function i(){
         initialValue = initialValue + 1
      }
    
      function d(){
         initialValue = initialValue - 1
      }
    
      function s(){
         initialValue = initialValue**2
      }
    
      function o(){
        return initialValue
      }
    
    
      return {
        i,
        d,
        s,
        o
      }
    
    }
    
    
    
    const newFish = Deadfish()
    let result = []
    
    
    for(let i =0; i< data.length; i+=1){
      debugger
      if(data[i] === 'i'){
        newFish.i()
      }else if(data[i] === 'd'){
        newFish.d()
      }else if(data[i] === 's'){
        newFish.s()
      }else if(data[i]=== 'o'){
        result.push(newFish.o())
      }
    }
    
    return result
    
    }