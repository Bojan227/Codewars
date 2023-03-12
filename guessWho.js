/*
Introduction
Guess Who? is a two-player guessing game created by Ora and Theo Coster, also known as Theora Design, that was first manufactured by Milton Bradley in 1979. It was first brought to the UK by Jack Barr Sr in 1982 (Source Wikipedia)
Connect 4
Task
Your task is to make a simple class called GuessWho. The computer will try and guess your character, your job is to return back to the computer a list of possible characters so that it can guess successfully. You will need at least one method in the class called  guess, this is where the computer posts the guess.
Characters

Rules
1.  The computer willl give you the character in the initialization of the class

2.  The computer will post the guess to the method guess

3.  The computers guess will either be a name of a character or one of these characteristics ["Male","Female","Glasses","Brown eyes","Bald","White hair","Small mouth","Mustache","Brown hair","Big mouth","Small nose","Blue eyes","Hat","Long hair","Black hair","Earrings","Blonde hair","Ginger hair","Beard","Big nose"]

4.  If the computer passes a characteristic that your character has then return all the characters that have that characteristic.

5.  If the computer passes a characteristic that your character does not have then return all characters that do not have that characteristic.

6.  Update your character list

7.  Keep a tally of the amount of turns the computer has had.

8.  All characters and characteristic are capitalized
Character Characteristics - pre-loaded into initial solution
characteristic = [["Jean-Claude",["Male","Glasses","Brown eyes","Bald","White hair","Small mouth","Small nose"]],
                  ["Pierre",["Male","Mustache","Brown eyes","Brown hair","Big mouth","Small nose"]],
                  ["Jean",["Male","White hair","Big nose","Big mouth","Blue eyes"]],
                  ["Amelie",["Female","Hat","Brown hair","Small mouth","Long hair","Brown eyes","Small nose"]],
                  ["Mirabelle",["Female","Black hair","Earrings","Small mouth","Brown eyes","Big nose"]],
                  ["Isabelle",["Female","Blonde hair","Glasses","Hat","Small mouth","Small nose","Brown eyes"]],
                  ["Antonin",["Male","Brown eyes","Black hair","Small nose","Big mouth"]],
                  ["Bernard",["Male","Brown eyes","Brown hair","Small nose","Hat"]],
                  ["Owen",["Male","Blue eyes","Blonde hair","Small nose","Small mouth"]],
                  ["Dylan",["Male","Brown eyes","Blonde hair","Small nose","Small mouth","Bald","Beard"]],
                  ["Herbert",["Male","Brown eyes","Blonde hair","Big nose","Small mouth","Bald"]],
                  ["Christine",["Female","Blue eyes","Blonde hair","Small nose","Small mouth","Long hair"]],
                  ["Luc",["Male","Brown eyes","White hair","Small nose","Small mouth","Glasses"]],
                  ["Cecilian",["Male","Brown eyes","Ginger hair","Small nose","Small mouth"]],
                  ["Lionel",["Male","Brown eyes","Brown hair","Big nose","Big mouth","Mustache"]],
                  ["Benoit",["Male","Brown eyes","Brown hair","Small mouth","Small nose","Mustache","Beard"]],
                  ["Robert",["Male","Blue eyes","Brown hair","Big nose","Big mouth"]],
                  ["Charline",["Female","Brown hair","White hair","Small nose","Big mouth"]],
                  ["Renaud",["Male","Brown eyes","Blonde hair","Small nose","Big mouth","Mustache"]],
                  ["Michel",["Male","Brown eyes","Blonde hair","Small nose","Big mouth","Beard"]],
                  ["Pierre-Louis",["Male","Blue eyes","Brown hair","Small nose","Small mouth","Bald","Glasses"]],
                  ["Etienne",["Male","Brown eyes","Blonde hair","Small nose","Small mouth","Glasses"]],
                  ["Henri",["Male","Brown eyes","White hair","Small nose","Big mouth","Hat"]],
                  ["Damien",["Male","Brown eyes","Blonde hair","Small nose","Big mouth","Hat"]]]
Returns
Return ["Correct! in n turns"]. Where n is the amount of turns the computer has taken, if the computer guesses the correct character.

Return array of possible characters if a computer doesn't guess the correct character or characteristic.

Return array of possible characters if a computer doesn't guess the correct characteristic.
Example
Game set up with the character Amelie

game = new GuessWho("Amelie")
The computer guesses the characteristic Female

game.guess("Female")
Amelia is female so you should return all the characters that are female.

["Amelie", "Mirabelle", "Isabelle", "Christine", "Charline"]
Good luck and enjoy!
*/

function GuessWho(character) {
  this.characteristic = [
    [
      "Jean-Claude",
      [
        "Male",
        "Glasses",
        "Brown eyes",
        "Bald",
        "White hair",
        "Small mouth",
        "Small nose",
      ],
    ],
    [
      "Pierre",
      [
        "Male",
        "Mustache",
        "Brown eyes",
        "Brown hair",
        "Big mouth",
        "Small nose",
      ],
    ],
    ["Jean", ["Male", "White hair", "Big nose", "Big mouth", "Blue eyes"]],
    [
      "Amelie",
      [
        "Female",
        "Hat",
        "Brown hair",
        "Small mouth",
        "Long hair",
        "Brown eyes",
        "Small nose",
      ],
    ],
    [
      "Mirabelle",
      [
        "Female",
        "Black hair",
        "Earrings",
        "Small mouth",
        "Brown eyes",
        "Big nose",
      ],
    ],
    [
      "Isabelle",
      [
        "Female",
        "Blonde hair",
        "Glasses",
        "Hat",
        "Small mouth",
        "Small nose",
        "Brown eyes",
      ],
    ],
    [
      "Antonin",
      ["Male", "Brown eyes", "Black hair", "Small nose", "Big mouth"],
    ],
    ["Bernard", ["Male", "Brown eyes", "Brown hair", "Small nose", "Hat"]],
    ["Owen", ["Male", "Blue eyes", "Blonde hair", "Small nose", "Small mouth"]],
    [
      "Dylan",
      [
        "Male",
        "Brown eyes",
        "Blonde hair",
        "Small nose",
        "Small mouth",
        "Bald",
        "Beard",
      ],
    ],
    [
      "Herbert",
      ["Male", "Brown eyes", "Blonde hair", "Big nose", "Small mouth", "Bald"],
    ],
    [
      "Christine",
      [
        "Female",
        "Blue eyes",
        "Blonde hair",
        "Small nose",
        "Small mouth",
        "Long hair",
      ],
    ],
    [
      "Luc",
      [
        "Male",
        "Brown eyes",
        "White hair",
        "Small nose",
        "Small mouth",
        "Glasses",
      ],
    ],
    [
      "Cecilian",
      ["Male", "Brown eyes", "Ginger hair", "Small nose", "Small mouth"],
    ],
    [
      "Lionel",
      ["Male", "Brown eyes", "Brown hair", "Big nose", "Big mouth", "Mustache"],
    ],
    [
      "Benoit",
      [
        "Male",
        "Brown eyes",
        "Brown hair",
        "Small mouth",
        "Small nose",
        "Mustache",
        "Beard",
      ],
    ],
    ["Robert", ["Male", "Blue eyes", "Brown hair", "Big nose", "Big mouth"]],
    [
      "Charline",
      ["Female", "Brown hair", "White hair", "Small nose", "Big mouth"],
    ],
    [
      "Renaud",
      [
        "Male",
        "Brown eyes",
        "Blonde hair",
        "Small nose",
        "Big mouth",
        "Mustache",
      ],
    ],
    [
      "Michel",
      ["Male", "Brown eyes", "Blonde hair", "Small nose", "Big mouth", "Beard"],
    ],
    [
      "Pierre-Louis",
      [
        "Male",
        "Blue eyes",
        "Brown hair",
        "Small nose",
        "Small mouth",
        "Bald",
        "Glasses",
      ],
    ],
    [
      "Etienne",
      [
        "Male",
        "Brown eyes",
        "Blonde hair",
        "Small nose",
        "Small mouth",
        "Glasses",
      ],
    ],
    [
      "Henri",
      ["Male", "Brown eyes", "White hair", "Small nose", "Big mouth", "Hat"],
    ],
    [
      "Damien",
      ["Male", "Brown eyes", "Blonde hair", "Small nose", "Big mouth", "Hat"],
    ],
  ];

  this.counter = 0;
  this.getCharacters = function () {
    return this.characteristic.map((row) => row[0]);
  };

  this.getCharacter = function () {
    return character;
  };
  this.incrementCounter = function () {
    this.counter += 1;
  };
  this.getCounter = function () {
    return this.counter;
  };

  this.transformCharacters = function () {
    this.characteristic = this.characteristic.map((row) => [
      row[0],
      row[1].reduce((a, v) => ({ ...a, [v]: v }), {}),
    ]);
  };

  this.setGuessedCharacter = function (guess) {
    this.characteristic = this.characteristic.filter((row) => row[0] !== guess);
  };

  this.filterCharacteristics = function (guess, isCharacteristicIncluded) {
    if (isCharacteristicIncluded) {
      this.characteristic = this.characteristic.filter((row) => row[1][guess]);
    } else {
      this.characteristic = this.characteristic.filter((row) => !row[1][guess]);
    }
  };

  this.transformCharacters();
  this.currentCharacterCharacteristics = this.characteristic.find(
    (row) => row[0] === character
  )[1];
}
GuessWho.prototype.guess = function (guess) {
  // Code here
  this.incrementCounter();

  if (guess === this.getCharacter()) {
    this.setGuessedCharacter(guess);
    return [`Correct! in ${this.getCounter()} turns`];
  }
  const isCharacteristicIncluded = this.currentCharacterCharacteristics[guess];

  if (isCharacteristicIncluded) {
    this.filterCharacteristics(guess, isCharacteristicIncluded);
  } else {
    if (this.getCharacters().includes(guess)) {
      this.setGuessedCharacter(guess);
    } else {
      this.filterCharacteristics(guess, isCharacteristicIncluded);
    }
  }
  return this.getCharacters();
};
