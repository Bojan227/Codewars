function sortEmotions(arr, order) {
  const emotionalHash = { T_T: 0, ":(": 1, ":|": 2, ":)": 3, ":D": 4 };

  return order
    ? arr.sort((a, b) => emotionalHash[b] - emotionalHash[a])
    : arr.sort((a, b) => emotionalHash[a] - emotionalHash[b]);
}
