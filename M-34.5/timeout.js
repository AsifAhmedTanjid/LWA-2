console.log(1);
console.log(2);
// console.log(3);
const timeoutId= setTimeout(()=>{
    console.log(3);
    
},4000)
console.log('timeout id',timeoutId);
const timeoutId2= setTimeout(()=>{
    console.log(32);
    
},4000)
console.log('timeout id',timeoutId2);

console.log(4);
console.log(5);
