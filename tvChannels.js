function redarr(arr) {
  // your code
  const sorted = [...new Set(arr)].sort((a, b) => {
    if (a[0].charCodeAt() === b[0].charCodeAt()) {
      const length = a.length > b.length ? b.length : a.length;

      for (let i = 1; i < length; i++) {
        if (a[i].charCodeAt() === b[i].charCodeAt()) continue;
        return a[i].charCodeAt() - b[i].charCodeAt();
      }
    }

    return a[0].charCodeAt() - b[0].charCodeAt();
  });

  return sorted.reduce((obj, curr, i) => {
    obj[i] = curr;

    return obj;
  }, {});
}
