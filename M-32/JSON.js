const person={
    id:20442493,
    name:'asif',
    isRich: false,
    friends:['sanju','rashed','mahfuz']

    
}
console.log(person,typeof person);
//JSON--> JavaScript Object Notation
//JSON.stringify : obejct --> json

const jsonPerson=JSON.stringify(person);
console.log(jsonPerson,typeof jsonPerson);
//JSON.parse : json--> object
const parsePerson=JSON.parse(jsonPerson);
console.log(parsePerson,typeof parsePerson);


