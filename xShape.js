/* 
You will get an odd integer n (>= 3) and your task is to draw an X. Each line is separated with \n.

Use the following characters: ■ □ For Ruby, Crystal and PHP: whitespace and o

Examples

                                     ■□□□■
            ■□■                      □■□■□
  x(3) =>   □■□             x(5) =>  □□■□□
            ■□■                      □■□■□
                                     ■□□□■


*/

function x(n) {
    const square = '■';
    const empty = '□';
  
    const mainShape = Array.from({ length: n }, () => [...Array(n).fill('')]);
    const xShape = mainShape.map((row, i) =>
      row
        .map((_, j) => (i === j || row.length - 1 - i === j ? square : empty))
        .join('')
    );
    return xShape.join('\n');
  }