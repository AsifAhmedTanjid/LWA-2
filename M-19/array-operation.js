/**
 * objective : write a function to give me the sum of all numbers in an array
 * step-1: declare a function
 * step-2: call check wether the function is called properly
 * 
 * step-3: set a parameter(s)
 * step-4: pass the parameters, check wether parameter is passed in a proper format
 * step-5: do the function tasks
(step by step)
 * 
 * 
 * 
 * 
* 
 */

function sumOfNumbers(numbers) {
  // console.log(numbers);
  let sum=0;
  for (const number of numbers) {
    console.log(number);
    sum+=number;
  }
  return sum;
}
const numbs = [52, 53, 11, 455, 23, 1343];
const sum = sumOfNumbers(numbs);
console.log("sum of numbers is", sum);
