//temporal dead zone //iff we declare let a=10; and want to access it before declaring then it goes to temporal deadzone

if (true) { //block scope
    const data=58;
    console.log('inside the if block',data);
    doMath(6,7)
    
}

// console.log(data); //cant access outside the scope

//function scope or local scope

function doMath(a,b){
console.log(a,b);
const sum =a+b;
const total = sum+10;
function doubleIt(x) 
{
    return x*2;
    
}
console.log('calling double it',doubleIt(50));


}
// console.log(sum); //cant access outside of the scope


const name='asif'; ////this is global scope and can be access inside the block as well

