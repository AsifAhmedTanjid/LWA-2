 async function loadData(){
    console.log('one');
console.log('two');

//this is asynchronous
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res=>res.json())
// .then(data=>console.log('got the data')
// )

//this is synchronous . waiting for it to fetch the data then rest are processed.
const res= await fetch('https://jsonplaceholder.typicode.com/users');
const data= await res.json();
console.log('data got in await');


console.log('three');
console.log('four');
console.log('five');
}
// loadData()


// try {

// }
// catch(error){

// }

const loadData2 = async()=>{
        console.log(1);
console.log(2);
try {
        const res= await fetch('https://jsonplaceholder.ticode.com/users');
        const data= await res.json();
console.log('data got in await', data.length);
}
catch(error){
    console.log('error happend');
    

}
        console.log(4);
console.log(5);

}
loadData2();