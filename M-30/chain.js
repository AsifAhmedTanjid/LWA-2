const student = {
    name: 'Rafid',
    marks: 90,
    1:50,
    family: {
        title:'bhuiya',
        // mother: {
        //     name:'noor',
        //     age:39
        // }
    },
    'home-address':'bashundhara'
}
console.log(student.family.mother?.age); //optional chain : suppose there is no mother of this object. then there will be an error without this optional chain