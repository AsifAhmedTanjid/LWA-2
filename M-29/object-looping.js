const numbers=[1,2,3,4,5,6];
for(const num of numbers){
    // console.log(num);
    
}

const employee ={
    name: 'asif',
    designation: 'dev',
    salary:20000,
    experience: 1,
    age:22
}

for(const key in employee){
    // console.log(key);
    const value =employee[key];
    console.log(key,value);
    
    
}

const keys = Object.keys(employee);
console.log(keys);

for(const key of keys){
    const value =employee[key];
    console.log(value);
    
}