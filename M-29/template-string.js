// const poem ='am pata jora jora
// marbo chabuk chorbe ghora'

const poem ='am pata jora jora \n' +
'marbo chabuk chorbe ghora \n' +
'ore khoka ghure dara' 

const poem1=`am para jora jora
marbo chabuk chobe ghora
ore `
 //this is template string


console.log(poem);
console.log(poem1);


// const num1=10;
// const num2=20;
// const result='sum of';

function sum(num1,num2){
    const result =num1+num2;
    //const output = 'sum of ' + num1 + ' and ' + num2 + ' is equal to ' + result;
    const output =`sum of ${num1+1} and ${num2} is equal to ${result}`; //this is dynamic sting
    console.log(output);
    
}


sum(2,6);