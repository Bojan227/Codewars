class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}

const andy = new Student("Andy", 0, 0, 2);
const stephen = new Student("Stephen", 0, 4, 0);
const eric = new Student("Eric", 8, 1, 0);
const david = new Student("David", 2, 0, 1);
const phil = new Student("Phil", 0, 2, 1);
const cam = new Student("Cameron", 2, 2, 0);
const geoff = new Student("Geoff", 0, 3, 0);

function mostMoney(students) {
  if (students.length === 1) return students[0].name;
  // your code here
  const calculate = students.map((student) => {
    return {
      ...student,
      total: student.fives * 5 + student.tens * 10 + student.twenties * 20,
    };
  });
  const sortedByTotal = calculate.sort((a, b) => b.total - a.total);

  return sortedByTotal.every(
    (student) => sortedByTotal[0].total === student.total
  )
    ? "all"
    : sortedByTotal[0].name;
}
