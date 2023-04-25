function tiaosheng(failedCount) {
  //coding and coding..
  let countJumps = 0;
  let seconds = 0;

  let refreshRope = 0;

  while (seconds !== 60) {
    if (failedCount[0] === countJumps) {
      if (refreshRope === 3) {
        countJumps += 1;
        refreshRope = 0;
        failedCount.shift();
      } else {
        refreshRope += 1;
      }
      seconds += 1;
    } else {
      countJumps += 1;
      seconds += 1;
    }
  }

  return countJumps;
}
