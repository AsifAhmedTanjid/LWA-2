const numbers = [2, 14, 5, 16, 7,6,13,2];

let sum=0;
for(const num of numbers){
    sum=sum+num;

}

const total= numbers.reduce((acc,curr)=>acc+curr,0)
console.log(sum);
console.log(total);
