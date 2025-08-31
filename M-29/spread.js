const numbers =[1,3,2334,1232,233];
console.log(numbers);
console.log(...numbers);


// const max = Math.max(112,123,12222,111,2);
const max =Math.max(...numbers)
console.log(max);


// const first =[1,2,3,4];
// const second =first;
// second.push(6);
// console.log(first);
const first =[1,2,3,4];
const second =[...first];
const third =[0,...first,99,100,...second];
second.push(6);
console.log(first);
console.log(second);
console.log(third);


const person ={
    name:'asif',
    age :25

}

const employee ={
    designation:'dev',
    ...person
}
console.log(employee);


// array elements spreaded for parameter of a function 

const total =(a,b,c)=> a+b+c;
const result= total(45,82,1);
const digits =[78,22,100];
console.log(result);
console.log(total(...digits));


