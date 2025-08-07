const numbers = [1, 2, 3, 4, 5, 6];
const reversed1 = [];
const reversed2 = [];
const reversed3 = [];
//one way
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  reversed1.unshift(numbers[i]);
}

console.log(reversed1);

//another way

for (let i = numbers.length - 1; i >= 0; i--) {
  //   console.log(numbers[i]);
  reversed2.push(numbers[i]);
}
console.log(reversed2);

//using for of

for (let num of numbers) {
  //   console.log(numbers[i]);
  reversed3.unshift(num);
}
console.log(reversed3);

//using reverse function

console.log(numbers.reverse());
