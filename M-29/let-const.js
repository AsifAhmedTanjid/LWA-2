// ES6
// const  not changeable
// console.log(name); //cannot use/access before initialization
console.log(device);

var device ='laptop'

const name='bangladesh'
// name='bd' not changeable

const countryName=name;
console.log(countryName);

// let changeable 

let a=15;
a=19;  //let allows to change the variable value
console.log(a);


const charge =50;


const dress=['shirt','pant'];
dress.push('maflar');  //cant change the value but can add and delete element
console.log(dress);


const students={
    name:'as',
    mark: 45
}
students.mark=60;  //can change non-primitive value.because here const fixes the reference value
console.log(students);
