const employee ={
    name: 'asif',
    designation: 'dev',
    salary:'20000',
    experience: 1
}

const keys =Object.keys(employee);
const keysType =Array.isArray(Object.keys(employee));

const values =Object.values(employee);
const valuesType =Array.isArray(Object.values(employee));

const entries =Object.entries(employee);
const entriesType =Array.isArray(Object.entries(employee));


console.log(keys);
console.log(keysType);
console.log(values);
console.log(valuesType);
console.log(entries);
console.log(entriesType);


const hel =[[[[1],[3]],[[5],[7]]],[[[9],[11]],[[13],[15]]]]

console.log(hel[0][1][1][0]);

