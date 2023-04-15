function shortestTime(speed) {
  let [a, b, c, d] = speed.sort((a, b) => a - b);

  let firstTime = 2 * a + b + c + d;
  let secondTime = 3 * b + a + d;
  return Math.min(firstTime, secondTime);
}
