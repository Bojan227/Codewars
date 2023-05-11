function sumGroups(arr) {
  //coding and coding..
  let newArr = [];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i + 1] % 2 === 0) {
      let counter = 0;

      while (true) {
        if (arr[i + counter] > -1 && arr[i + counter] % 2 === 0) {
          currentSum += arr[i + counter];
        } else {
          newArr.push(currentSum);
          currentSum = 0;
          i += counter - 1;

          break;
        }
        counter += 1;
      }
    } else if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0) {
      let counter = 0;
      while (true) {
        if (arr[i + counter] > -1 && arr[i + counter] % 2 !== 0) {
          currentSum += arr[i + counter];
        } else {
          newArr.push(currentSum);
          currentSum = 0;
          i += counter - 1;

          break;
        }
        counter += 1;
      }
    } else {
      newArr.push(arr[i]);
    }
  }

  if (arr.length === newArr.length) return arr.length;

  return sumGroups(newArr);
}
