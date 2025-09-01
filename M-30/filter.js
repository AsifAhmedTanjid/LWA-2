const numbers = [2, 14, 5, 16, 7,6,13,2];

const greaterThan10=numbers.filter(x=> x>10);
const evenNumbers =numbers.filter(num=> num%2===0);
console.log(greaterThan10);
console.log(evenNumbers);
