/* 
Create a function that returns a christmas tree of the correct height.

For example:

height = 5 should return:

    *    
   ***   
  *****  
 ******* 
*********
Height passed is always an integer between 0 and 100.

Use \n for newlines between each line.

Pad with spaces so each line is the same length. The last line having only stars, no spaces.

*/

function christmasTree(height) {

    if(height === 0) return ""

    let tree = ''
    let lng = height
    let counter = 0

    for(let i = 0; i < height; i++){
        if(i+1 === height){
            tree += ' '.repeat(lng - 1) + '*'.repeat(counter + 1) + ' '.repeat(lng - 1) 

            }else{
              
            tree += ' '.repeat(lng - 1) + '*'.repeat(counter + 1) + ' '.repeat(lng - 1) + '\n'
            }
       


        lng--
        counter += 2
    }

    return tree
}