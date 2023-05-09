const combinations = {
  0: ["0", "8"],
  1: ["1", "2", "4"],
  2: ["1", "2", "3", "5"],
  3: ["2", "3", "6"],
  4: ["1", "4", "5", "7"],
  5: ["2", "4", "5", "6", "8"],
  6: ["3", "5", "6", "9"],
  7: ["4", "7", "8"],
  8: ["0", "5", "7", "8", "9"],
  9: ["6", "8", "9"],
};
function getPINs(observed) {
  // split the number
  let digits = observed.split("");
  // make array of arrays of all possible variations of the number
  const variations = [];

  digits.forEach((value) => {
    variations.push(combinations[value]);
  });
  //reduce/combine all the values of each array with the other array

  return variations.reduce(function (a, b) {
    var result = [];
    debugger;
    for (var x in a) {
      debugger;
      for (var y in b) {
        debugger;
        result.push(a[x] + b[y]);
      }
    }
    return result;
  });
}
