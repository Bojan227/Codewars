function scoreHand(cards) {
  let hashCards = { J: 10, Q: 10, K: 10, 10: 10 };
  let hashMap = {};

  function calculateCards(cards) {
    return cards.reduce(
      (acc, card) => (acc += hashCards[card] || parseInt(card)),
      0
    );
  }

  for (let i = 0; i < cards.length; i++) {
    if (!hashMap[cards[i]]) {
      hashMap[cards[i]] = 0;
    }
    hashMap[cards[i]] += 1;
  }
  let keys = Object.keys(hashMap);

  if (hashMap["A"]) {
    if (
      hashMap["A"] === 1 &&
      keys.length === 2 &&
      (hashMap["J"] || hashMap["Q"] || hashMap["K"] || hashMap["10"])
    ) {
      return 21;
    } else if (hashMap["A"] === 1) {
      const withoutA = calculateCards(cards.filter((value) => value !== "A"));

      if (withoutA <= 10) {
        return withoutA + 11;
      } else if (withoutA > 10) {
        return withoutA + 1;
      }
    } else if (hashMap["A"] > 1) {
      const numberOfA = hashMap["A"];
      const withoutA = calculateCards(cards.filter((value) => value !== "A"));

      if (withoutA + (numberOfA - 1) <= 10) {
        return withoutA + (numberOfA - 1) + 11;
      } else if (withoutA + (numberOfA - 1) > 10) {
        return withoutA + (numberOfA - 1) + 1;
      }
    }
  } else {
    return calculateCards(cards);
  }
}
