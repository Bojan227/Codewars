function longestSlideDown(pyramid) {
  if (pyramid.length === 1) {
    return pyramid[0][0];
  }

  const last_layer = pyramid[pyramid.length - 1];
  debugger;
  const add_layer = [];
  debugger;
  for (let i = 1; i < last_layer.length; i++) {
    add_layer.push(Math.max(last_layer[i], last_layer[i - 1]));
    debugger;
  }

  pyramid[pyramid.length - 2] = pyramid[pyramid.length - 2].map((num, i) => {
    debugger;
    return num + add_layer[i];
  });
  debugger;
  return longestSlideDown(pyramid.slice(0, -1));
}
