function sweetDate(w1, r1, w2, r2, timePeriod) {
  //coding here...
  let johnWork = w1;
  let anneWork = w2;
  let johnRest = r1;
  let anneRest = r2;

  let numberOfDates = 0;
  let counter = 1;

  while (counter !== timePeriod) {
    if (johnWork === 0) {
      johnRest--;
    } else {
      johnWork--;
    }
    if (johnWork === 0 && johnRest === 0) {
      johnWork = w1;
      johnRest = r1;
    }

    if (anneWork === 0) {
      anneRest--;
    } else {
      anneWork--;
    }
    if (anneWork === 0 && anneRest === 0) {
      anneWork = w2;
      anneRest = r2;
    }

    if ((johnWork === 0) & (anneWork === 0)) {
      numberOfDates++;
    }
    counter++;
  }

  return numberOfDates;
}
