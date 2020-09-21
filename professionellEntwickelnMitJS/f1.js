function aF1(a, b) {
  console.log(arguments);
  console.log(arguments["0"]);
}

aF1();
aF1(1);
aF1([, 3, 2]);
aF1(...[, 3, 2]);

const a = {
  some() {
    console.log(this);
  },
};

// console.log(typeof a);

var Color;
(function (Color) {
  Color[(Color["Red"] = 1)] = "Red";
  Color[(Color["Green"] = 2)] = "Green";
  Color[(Color["Blue"] = 3)] = "Blue";
})(Color || (Color = {}));
