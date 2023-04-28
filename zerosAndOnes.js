function replaceZero(arr) {
  // your solution here
  let longest = 0;
  let currentIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr[i] = 1;

      const last = arr.lastIndexOf(0, i) === -1 ? 0 : arr.lastIndexOf(0, i) + 1;
      const next = arr.indexOf(0, i) === -1 ? arr.length : arr.indexOf(0, i);

      if (next - last >= longest) {
        longest = next - last;
        currentIndex = i;
      }

      arr[i] = 0;
    }
  }

  return currentIndex;
}
