const getTax =(amount,taxRate) => amount* taxRate/100;
const add=(p,q)=> p+q;


// single parameter 
const square =(x)=> x*x;
const square1 = x =>x*x; //() not required for single parameter

const firstElementOfArray = nums => nums[0];
console.log(square(8));
console.log(square1(10));
console.log(firstElementOfArray([111,4,2,3]));

// no parameter  will not be in use

const logIt =()=> console.log('hello js');
logIt();


//anonymous arrow function 
document.getElementById('hello').addEventListener('click',()=>{
    console.log('you clicked on hello');
    
})

document.getElementById('hello').addEventListener('click',event=>{
    const targetedDom= event.target;
    console.log('you clicked on hello' +targetedDom);
    
})