function winner(deckSteve, deckJosh) {
  // TODO
  const cardLib = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    T: 10,
    J: 12,
    Q: 13,
    K: 14,
    A: 15,
  };

  let steveScore = 0;
  let joshScore = 0;

  deckSteve.forEach((card, i) => {
    if (cardLib[card] > cardLib[deckJosh[i]]) {
      steveScore++;
    } else if (cardLib[card] < cardLib[deckJosh[i]]) {
      joshScore++;
    }
  });

  return steveScore === joshScore
    ? "Tie"
    : steveScore > joshScore
    ? `Steve wins ${steveScore} to ${joshScore}`
    : `Josh wins ${joshScore} to ${steveScore}`;
}
