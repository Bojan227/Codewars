function whacAMole(arr) {
  //coding here..
  const arrayOfNumbers = arr.reduce((flatArray, row) => {
    flatArray.push(...row);
    return flatArray;
  }, []);
  const sortedArrayOfNumbers = arrayOfNumbers.sort((a, b) => a - b);

  let numberOfMoles = 0;
  let currentHits = 0;
  let isGameOver = true;

  while (true) {
    sortedArrayOfNumbers.forEach((value, i) => {
      if (currentHits < 2 && value > 0) {
        currentHits += 1;
        numberOfMoles += 1;
        sortedArrayOfNumbers[i] = 0;
      } else {
        if (value !== 0) {
          isGameOver = false;
          sortedArrayOfNumbers[i] = value - 1;
        }
      }
    });

    if (isGameOver) {
      break;
    }

    currentHits = 0;
    isGameOver = true;
  }

  return numberOfMoles;
}
