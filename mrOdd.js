function odd(str) {
  //coding and coding..
  let o = 0;
  let d = 0;
  let r = 0;

  for (let c of str) {
    if (c == "o") o++;
    if (o && c == "d") d++;
    if (o && d > 1) {
      r++;
      d -= 2;
      o--;
    }
  }

  return r;
}
