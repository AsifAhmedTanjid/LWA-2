// function declaration

function sum(num1, num2) {
  return num1 + num2;
}

//function expression

const addition = function (num1, num2) {
  return num1 + num2;
};

// arrow function

const add = (num1, num2) => num1 + num2;
const isFirstBig = (x, y) => x > y;

//multiline arrow function --> for multiline we have to return manually which i do not require it automatically does implicitly in single line arrow function like add()
const doMath = (x, y) => {
  const makeDouble = x * 2;
  const makeDouble2 = y * 2;
  result = makeDouble + makeDouble2;
  return result;
};

const result = addition(17, 13);
console.log(result);
console.log(add(2, 3));
console.log(isFirstBig(4, 6));
