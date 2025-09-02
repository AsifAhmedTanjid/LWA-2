// function counter(){
//     let count=0;
//     // const nums =[];
//     // const people={}
//     function innerFunction(){
//         console.log('inner function,someone called me');
        
//     }
//     return innerFunction;
// }

// const output=counter();
// console.log(output());


function counter(){
    let count=10;
    return function(){
        count++;
        console.log('inner function',count);
        
    }

}
// const innerfunc= counter()
// innerfunc();
// innerfunc();
// innerfunc();

const rahimCounter = counter();
rahimCounter();
rahimCounter();
rahimCounter();
console.log('...................................');
const karimCounter =counter();
karimCounter();
karimCounter();
karimCounter();
karimCounter();
