const employee ={
    name: 'asif',
    designation: 'dev',
    salary:20000,
    experience: 1,
    age:22
}
console.log(employee);
Object.freeze(employee); //after freezing any modification to the object will not work

delete employee.experience
employee.salary =employee.salary+5000
employee.location='dhaka'
console.log(employee);
