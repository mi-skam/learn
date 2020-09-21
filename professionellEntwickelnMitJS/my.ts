interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const bjoern: User = new UserAccount("Björn", 0);

enum Color {
  Red = 1,
  Green,
  Blue,
}
console.log(Color);

function createPerson(
  first: string,
  second: string,
  ...marks: number[]
): string {
  let sum = 0;
  if (marks.length !== 0) {
    sum = marks.reduce((prev, next) => {
      return prev + next;
    });
  }
  return `${first} ${second} Durchschittsnote: ${sum / marks.length || 6}`;
}

// console.log(createPerson("heino", "lauterbach", 2, 2, 2, 2));
// console.log(createPerson("rudi", "ruppig", 5, 4, 4, 5));
