function tripledouble(num1, num2) {
    let firstNum = String(num1).split('')
    let triple = []
    for(let i = 0; i < firstNum.length; i++){
      if(firstNum[i] === firstNum[i+1] && firstNum[i] === firstNum[i+2]){
        triple.push(`${firstNum[i]}${firstNum[i+1]}${firstNum[i+2]}`)
        
      }

    }
    let secondNum = String(num2).split('')


    while(triple.length !== 0 ){
      for(let i = 0; i < secondNum.length; i++){
         if(triple[0][0] === secondNum[i] && secondNum[i] === secondNum[i+1]){
          return 1
         }
      }
          triple.shift()
    }


    return 0

}