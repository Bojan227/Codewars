/*
Story
The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

But some of the rats are deaf and are going the wrong way!

Kata Task
How many deaf rats are there?

Legend
P = The Pied Piper
O~ = Rat going left
~O = Rat going right
Example
ex1 ~O~O~O~O P has 0 deaf rats

ex2 P O~ O~ ~O O~ has 1 deaf rat

ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats

*/

var countDeafRats = function (town) {
    // Your code here
    let deafRats = 0;
    const split = town.split('P');
  
    let goRight = split[0].split('').filter((str) => {
      if (str === '~' || str === 'O') return str;
    });
  
    let goLeft = split[1].split('').filter((str) => {
      if (str === '~' || str === 'O') return str;
    });
  
    // go right
    for (let i = 0; i < goRight.length; i += 2) {
      if (goRight[i] !== '~' && goRight[i + 1] !== 'O') {
        deafRats++;
      }
    }
    // go left
    for (let i = 0; i < goLeft.length; i += 2) {
      if (goLeft[i] !== 'O' && goLeft[i + 1] !== '~') {
        deafRats++;
      }
    }
  
    return deafRats;
  };