//create element and set innter text or inner html

const newChild=document.createElement('li');
newChild.innerText='new foodballer';


//find the parent where you add the child

const playerlist =document.getElementById('player-list');

// append the child to the parent 

playerlist.appendChild(newChild);