class Pong {
  constructor(maxScore) {
    this.maxScore = maxScore;
    this.currentPlayer = 1;
    this.player1 = 0;
    this.player2 = 0;
    this.isGameOver = false;
  }

  switchPlayer() {
    this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
  }

  incrementPlayerScore() {
    if (this.currentPlayer === 1) {
      this.player2 += 1;
    } else {
      this.player1 += 1;
    }
  }

  checkHit(ballPos, playerPos) {
    if (Math.abs(playerPos - ballPos) <= 3.5) {
      return `Player ${this.currentPlayer} has hit the ball!`;
    } else {
      this.incrementPlayerScore();

      if (this.checkWin()) {
        return this.checkWin();
      }

      return `Player ${this.currentPlayer} has missed the ball!`;
    }
  }

  checkWin() {
    if (this.player1 === this.maxScore) {
      this.isGameOver = true;
      return "Player 1 has won the game!";
    } else if (this.player2 === this.maxScore) {
      this.isGameOver = true;
      return "Player 2 has won the game!";
    }
  }

  play(ballPos, playerPos) {
    if (this.isGameOver) {
      return "Game Over!";
    }

    const returnStatement = this.checkHit(ballPos, playerPos);
    this.switchPlayer();
    return returnStatement;
  }
}
