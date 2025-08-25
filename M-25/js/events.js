console.log("hello events");
// <!-- option 2 for event handler -->

function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}

function makeRed() {
  document.body.style.backgroundColor = "red";
}

//option 3  :  get element by id and then set onclick

const btnMakeBlue = document.getElementById("btn-make-blue");
// console.log(btnMakeBlue);
btnMakeBlue.onclick = function makeBlue() {
  document.body.style.backgroundColor = "blue";
};

//option 2 different version dont call the function using ();

const btnMakePurple = document.getElementById("btn-make-purple");

btnMakePurple.onclick = makePurple;
function makePurple() {
  document.body.style.backgroundColor = "purple";
}
