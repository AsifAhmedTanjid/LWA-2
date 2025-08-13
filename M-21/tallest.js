const heights = [65,66,72,78,60,65,66];

function getMax(numbers){
    // console.log(numbers);
   let max = numbers[0];
    for(const number of numbers){
        // console.log(number);
        if(number>max){
            max=number;
        }
        
    }
    return max;
}

const max = getMax(heights);
console.log('max height is ', max);
