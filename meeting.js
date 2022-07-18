/* 
John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;
Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
Could you make a program that

makes this string uppercase
gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. 
Last name and first name of a guest come in the result between parentheses 
separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)
(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
It can happen that in two distinct families with the same family name 
two people have the same first name too.

*/
function meeting(s) {
    const names = s.toUpperCase().split(';')
  const sorted = names.sort((a,b)=>{
      const [aFirst, aLast] = a.split(':')
      const [bFirst, bLast] = b.split(':')  

      if(aLast === bLast){
        return aFirst > bFirst ? 1 : -1
      }else{
        return aLast > bLast ? 1 : -1
      } 
  })

  
  const result = sorted.map(name=>{
    const[first, last]  = name.split(':')
    return `(${last}, ${first})`
  })

  return result.join('')
}