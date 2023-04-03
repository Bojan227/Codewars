/*
The set of words is given. Words are joined if the last letter of one word and the first letter of another word are the same. Return true if all words of the set can be combined into one word. Each word can and must be used only once. Otherwise return false.

Input
Array of 3 to 7 words of random length. No capital letters.

Example true
Set: excavate, endure, desire, screen, theater, excess, night.
Millipede: desirE EndurE ExcavatE ExcesS ScreeN NighT Theater.

Example false
Set: trade, pole, view, grave, ladder, mushroom, president.
Millipede: presidenT Trade.

*/

class Word {
  id;
  firstChar;
  lastChar;

  constructor(id, firstChar, lastChar) {
    this.id = id;
    this.firstChar = firstChar;
    this.lastChar = lastChar;
  }
}

function solution(wordsArray) {
  let words = [];
  let idsArray = [];

  wordsArray.forEach((word, id) => {
    words.push(new Word(id, word[0], word[word.length - 1]));
    idsArray.push(id);
  });

  let result = false;
  let queue = [];
  words.forEach((word) => queue.push([word.id]));

  while (queue.length > 0) {
    let currentArray = queue.shift();

    let lastWord = words[currentArray[currentArray.length - 1]];

    console.log(lastWord);
    if (currentArray.length === words.length) {
      result = true;
      break;
    }

    let wordsIdLeft = idsArray.filter(
      (id) =>
        !currentArray.includes(id) && lastWord.lastChar === words[id].firstChar
    );

    wordsIdLeft.forEach((id) => {
      queue.unshift([...currentArray, id]);
    });
  }

  return result;
}
