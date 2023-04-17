function points(dice) {
  // code your solution here
  let hash = {};

  for (let i = 0; i < dice.length; i += 1) {
    if (!hash[dice[i]]) {
      hash[dice[i]] = 0;
    }

    hash[dice[i]] += 1;
  }

  let keys = Object.keys(hash);
  let values = Object.values(hash);

  if (keys.length === 1) return 50;

  if (keys.length === 2 && values.includes(4)) return 40;

  if (keys.length === 2 && values.includes(3) && values.includes(2)) return 30;

  if (keys.length === 5) {
    const sortedKeys = keys.sort((a, b) => a - b);

    if (!sortedKeys.includes("2")) return 20;

    for (let i = 0; i < sortedKeys.length; i++) {
      if (!sortedKeys[i + 1]) return 20;
      if (parseInt(sortedKeys[i]) + 1 !== parseInt(sortedKeys[i + 1])) return 0;
    }

    return 20;
  }

  return 0;
}
