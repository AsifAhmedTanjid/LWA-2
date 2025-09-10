console.log('one');
console.log('two');
callThree();
//fetch is a browser api
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res=>res.json())
// .then(data=>console.log(data)
// )


setTimeout(()=>console.log('timeout 4sec'),4000
);
setTimeout(callThree,5000);
console.log('four');
console.log('five');

function callThree(){
    console.log('three');
}