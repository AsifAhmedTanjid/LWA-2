// console.log('append file conn');


//1. parent node

const mainContainer =document.getElementById('main-container')
// console.log(mainContainer);


//2.create child

const placesSection = document.createElement('section');


//create h1

const h1 = document.createElement('h1');
h1.innerText='places i want to visit';
placesSection.appendChild(h1);
const ul =document.createElement('ul');
const li1= document.createElement('li');
li1.innerText ='bandorban';

ul.appendChild(li1);
placesSection.appendChild(ul);

const li2= document.createElement('li');
li2.innerText ='coxbazar';
ul.appendChild(li2);





//3.append placesection to the maincontainer

mainContainer.append(placesSection);



//easier to create html

const booksSection = document.createElement('section');
booksSection.innerHTML = `
<h1> books i need to read</h1>
<ul>
    <li>Physics</li>
    <li>Chemistry</li>
    <li>Math</li>
</ul>
`;


mainContainer.appendChild(booksSection);