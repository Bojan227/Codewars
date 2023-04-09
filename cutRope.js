function cutRope(length, m, n) {
  //coding here...

  const ropeWithM = [];
  const finalRope = [];

  let count = 0;
  for (let i = 0; i < length; i++) {
    if (count === m) {
      ropeWithM.push(".");
      count = 0;
    }
    ropeWithM.push("-");
    count += 1;
  }

  let tempStr = "";
  let counter = 0;
  for (let i = 0; i < ropeWithM.length; i++) {
    console.log(ropeWithM[i]);

    if (counter === n) {
      finalRope.push(tempStr);
      if (ropeWithM[i] === ".") {
        tempStr = "";
      } else {
        tempStr = ropeWithM[i];
      }
      finalRope.push(".");
      counter = 0;
    } else if (ropeWithM[i] === ".") {
      finalRope.push(tempStr);
      finalRope.push(".");
      tempStr = "";
    } else {
      tempStr += ropeWithM[i];
    }

    counter += 1;
    if (ropeWithM[i] === ".") {
      counter -= 1;
    }
  }

  if (tempStr.length > 0) {
    finalRope.push(tempStr);
  }

  return finalRope
    .filter((value) => value !== ".")
    .reduce((acc, curr) => {
      if (!acc[curr.length + "cm"]) {
        acc[curr.length + "cm"] = 0;
      }
      acc[curr.length + "cm"] = acc[curr.length + "cm"] += 1;

      return acc;
    }, {});
}
