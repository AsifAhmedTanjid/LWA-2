const numbers= [1,2,3,4,5,6]
const reversed1 =[];
const reversed2 =[];
//one way
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  reversed1.unshift(numbers[i]);
}

console.log(reversed1);

//another way

for (let i = numbers.length-1; i >=0; i--) {
//   console.log(numbers[i]);
  reversed2.push(numbers[i]);
}
console.log(reversed2);