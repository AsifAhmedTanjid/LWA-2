const students =[
    {id:1,name:'abul', marks:50},
    {id:2,name:'dabul', marks:66},
    {id:3,name:'fabul', marks:99},
    {id:4,name:'gabul', marks:100}
]

const names=students.map(student=>student.marks*0.75);
const goodStudents= students.filter(student=>student.marks>80)
const goodStudent= students.find(student=>student.marks>80)
console.log(names);
console.log(goodStudents);
console.log(goodStudent);

