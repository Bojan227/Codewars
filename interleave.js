function interleave(...numberArrays) {
  if (numberArrays.length === 1) return numberArrays[0];
  let maxArray = 0;

  if (!numberArrays.every((value) => value.length === numberArrays[0].length)) {
    maxArray = Math.max(...numberArrays.map((arr) => arr.length));
  }
  let equalArrays = [];

  if (maxArray > 0) {
    for (let i = 0; i < numberArrays.length; i++) {
      if (numberArrays[i].length !== maxArray) {
        const valuesToFill = maxArray - numberArrays[i].length;

        equalArrays.push([
          ...numberArrays[i],
          ...Array.from({ length: valuesToFill }, () => null),
        ]);
      } else {
        equalArrays.push(numberArrays[i]);
      }
    }
  } else {
    equalArrays.push(...numberArrays);
  }

  const cellsByColumn = equalArrays.reduce((acc, curr, i) => {
    curr.forEach((value, j) => {
      acc[j] = acc[j] || [];
      acc[j][i] = value;
    });

    return acc;
  }, []);

  return [].concat.apply([], cellsByColumn);
}
