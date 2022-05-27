const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    do {
      this.prevGuesses.push(this.getGuess());
      this.render();
    }
    while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum)
    return render();
  },
  getGuess: function () {
    let playerGuess;
    do {
      playerGuess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}:`))
    }
    while (isNaN(playerGuess) || playerGuess < this.smallestNum || playerGuess > this.biggestNum)
    return playerGuess;
  },
  render: function () {
    let message;
    if (this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum) {
      message = `Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`
    } else {
      message = `Your guess is too ${this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum ? 'high' : 'low'} Previous guesses: ${this.prevGuesses.join(", ")}`;
    }
    alert(message)
  }
};

game.play()


