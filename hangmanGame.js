class Hangman {
  constructor(word) {
    this.word = word;
    this.mistakes = 0;
    this.correctWords = [];
    this.missedWords = [];
    this.guessedWords = [];
    this.isGameOver = false;
  }

  generateGameState() {
    let currentState = "";
    let word = "";

    for (let i = 0; i < this.word.length; i++) {
      if (this.correctWords.includes(this.word[i])) {
        if (i + 1 === this.word.length) {
          currentState += `${this.word[i]}`;
        } else {
          currentState += `${this.word[i]} `;
        }
        word += this.word[i];
      } else {
        if (i + 1 === this.word.length) {
          currentState += "_";
        } else {
          currentState += "_ ";
        }
        word += "_";
      }
    }
    if (word === this.word) {
      this.isGameOver = true;
      return `You found the word! (${this.word})`;
    }

    if (this.missedWords.length === 0) {
      return currentState;
    }

    return `${currentState} # ${this.missedWords.join("")}`;
  }

  isHung() {
    if (this.mistakes === 6) {
      this.isGameOver = true;
      return `You got hung! The word was ${this.word}.`;
    }
  }

  guess(letter) {
    if (this.isGameOver) return "The game has ended.";

    if (this.guessedWords.includes(letter)) return this.generateGameState();

    if (this.word.includes(letter)) {
      this.correctWords.push(letter);
      this.guessedWords.push(letter);
      return this.generateGameState();
    } else {
      this.missedWords.push(letter);
      this.guessedWords.push(letter);

      this.isHung();

      this.mistakes += 1;
      return this.generateGameState();
    }
  }
}
