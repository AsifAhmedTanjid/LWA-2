const employee ={
    name: 'asif',
    designation: 'dev',
    salary:20000,
    experience: 1,
    age:22
}
console.log(employee);
Object.seal(employee); //we can modify but cannot delete or add

delete employee.experience
employee.salary =employee.salary+5000
employee.location='dhaka'
console.log(employee);
