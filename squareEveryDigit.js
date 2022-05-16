/*Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer*/

function squareDigits(num){
    let result = '';
    // entire digit is converted into a string then splitted into an array, than with map every digit gets squared and than joined back into a string
    result = String(num).split('').map(x=> x**2).join('')
    return parseInt(result)
}
