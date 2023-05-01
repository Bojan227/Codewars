function woodCut(woods, n) {
  let a = 1;
  let b = Math.max(...woods);

  debugger;
  while (a <= b) {
    let d = ((a + b) / 2) | 0;
    debugger;
    let m = woods.reduce((acc, e) => acc + ((e / d) | 0), 0);
    debugger;
    if (m >= n) a = d + 1;
    else b = d - 1;
    debugger;
  }
  return a - 1;
}
