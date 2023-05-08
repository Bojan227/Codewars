class Field {
  constructor() {
    this.field = this.createField();
    this.hashPosition = {
      L4: 0,
      L3: 1,
      L2: 2,
      L1: 3,
      L0: 4,
      R0: 4,
      R1: 5,
      R2: 6,
      R3: 7,
      R4: 8,
    };

    this.currentBlock = 0;
    this.currentPosition = 0;
    this.clearedLines = 0;
  }

  fillBlock() {
    const lastPosition = 29;
    let counter = 0;

    while (this.currentBlock !== 0) {
      if (counter > 29) break;

      if (this.field[lastPosition - counter][this.currentPosition] === 0) {
        this.field[lastPosition - counter][this.currentPosition] = 1;
        this.currentBlock -= 1;
      }

      counter++;
    }
  }

  checkFirstRow() {
    const isRowFilled = this.field[0].some((value) => value === 1);

    if (isRowFilled) {
      return true;
    }
  }

  checkLastRow() {
    while (true) {
      let currentRowToCheck = 29;

      const isRowFilled = this.field[currentRowToCheck].every(
        (value) => value === 1
      );

      if (isRowFilled) {
        this.clearedLines += 1;
        currentRowToCheck -= 1;
        this.field.pop();
        this.field.unshift(Array.from({ length: 9 }, () => 0));
      } else {
        break;
      }
    }
  }

  setCurrentBlock(log) {
    this.currentBlock = parseInt(log[0]);
  }

  setCurrentPosition(log) {
    this.currentPosition = this.hashPosition[log[1] + log[2]];
  }

  createField() {
    let mainField = [];

    for (let i = 0; i < 30; i++) {
      let newArray = Array.from({ length: 9 }, () => 0);
      mainField.push(newArray);
    }

    return mainField;
  }
}

function tetris(a) {
  // your code here
  const newField = new Field();

  for (let i = 0; i < a.length; i++) {
    newField.setCurrentBlock(a[i]);
    newField.setCurrentPosition(a[i]);
    newField.fillBlock();
    newField.checkLastRow();
    if (newField.checkFirstRow()) {
      return newField.clearedLines;
    }
  }

  return newField.clearedLines;
}
