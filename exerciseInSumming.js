function minimumSum(values, n) {
    // sum the n smallest integers in the array values (not necessarily ordered)
    return values.sort((a,b)=>a - b).slice(0, n).reduce((acc,curr)=>acc += curr, 0)


  }
  
  function maximumSum(values, n) {
    // sum the n largest integers in the array values (not necessarily ordered)
    return values.sort((a,b)=>b - a).slice(0, n).reduce((acc,curr)=>acc += curr, 0)

  }