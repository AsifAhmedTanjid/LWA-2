const numbers = [2, 4, 5, 6, 7];

// const doubled =[];
// for(const num of numbers){
//     const result=num*2;
//     doubled.push(result);
// }

// const doubleIt = (x) => x * 2;

// const doubled = numbers.map(doubleIt);


const doubled = numbers.map(x => x * 2);
const square = numbers.map(x=>x*x)

console.log(doubled,square);
