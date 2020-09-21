class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const bjoern = new UserAccount("Björn", 0);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
console.log(Color);
function createPerson(first, second, ...marks) {
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
//# sourceMappingURL=my.js.map