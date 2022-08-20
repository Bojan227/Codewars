



function solution (roman) {
    let result = 0,
    decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    romanChar = [
      'M',
      'CM',
      'D',
      'CD',
      'C',
      'XC',
      'L',
      'XL',
      'X',
      'IX',
      'V',
      'IV',
      'I',
    ];

    for(let i = 0; i < roman.length; i++){
        if(romanChar.find(str=> str === roman.slice(i, i + 2))){
            result += decimals[romanChar.indexOf(roman.slice(i, i + 2))]
            i++
        }else{
            result += decimals[romanChar.indexOf(roman[i])]
            
        }
    }

      return result
  }