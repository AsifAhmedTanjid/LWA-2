function oddAverage(numbers) {
let sum=0;
let count=0;
  for (const number of numbers) {
    if(number%2!==0){
        sum=sum+number;
        count++;
    }
  }

  let avg = sum/ count; 
  return avg;
}

const numbers = [42, 13, 58, 65, 81, 96, 7];
const avg = oddAverage(numbers);
console.log("average of the odd numbers is : ", avg);
