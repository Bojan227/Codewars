/*
Complete the solution so that it returns true if it contains any duplicate argument values. Any number of arguments may be passed into the function.

The array values passed in will only be strings or numbers. The only valid return values are true and false.

Examples:

solution(1, 2, 3)             -->  false
solution(1, 2, 3, 2)          -->  true
solution('1', '2', '3', '2')  -->  true

*/


function solution(...args) {
    console.log(args)
      // return true if this method is called with duplicate argument values
    
      const items = args.reduce((acc, curr) => {
        if (!acc[curr]) {
          acc[curr] = 0;
        } else {
          return true;
        }
    
        acc[curr]++;
    
        return acc;
      }, {});
    
      if (typeof items === 'object') return false;
    
      return items;
    }