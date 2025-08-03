const country ='bangladesh';
const division ="noakhali";
const district = `Cumilla`;
const thana = new String('Dohar');

console.log(thana,',',typeof(thana));

const numbers =[54,98,78,21,65];
console.log(numbers.length);
console.log(numbers[1]);
numbers[1]=999;  //array is mutable. means it is changeable
console.log(numbers);

const capital='dhaka';
console.log(capital);
console.log(capital.length);


console.log(capital[0]);
capital[1]='F';
console.log(capital);  // no change so string is immutable. not changeable

