function highlight(code) {
  let str = [[code[0]]];
  for (let i = 1; i < code.length; i++) {
    if (str[str.length - 1][0] === code[i] && !Number.isInteger(+code[i])) {
      str[str.length - 1].push(code[i]);
    } else if (
      Number.isInteger(+str[str.length - 1][0]) &&
      Number.isInteger(+code[i])
    ) {
      str[str.length - 1][0] += code[i];
    } else {
      str.push([code[i]]);
    }
  }
  console.log(str);
  debugger;
  return str
    .map((e) => {
      if (e[0] == "F") {
        return `<span style="color: pink">${e.join("")}</span>`;
      } else if (e[0] == "L") {
        return `<span style="color: red">${e.join("")}</span>`;
      } else if (e[0] == "R") {
        return `<span style="color: green">${e.join("")}</span>`;
      } else if (e[0] == "(") {
        return e.join("");
      } else if (e[0] == ")") {
        return e.join("");
      } else {
        return `<span style="color: orange">${e.join("")}</span>`;
      }
    })
    .join("");
}
