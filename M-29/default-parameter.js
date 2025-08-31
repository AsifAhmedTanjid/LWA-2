function sum(num1 = 0, num2 = 0) {
  //here num2=0 is default parameter. if the value is not available for the function parameter as arguments then it takes default value provided in the parameter like num2=0;
  const total = num1 + num2;
  console.log(num1, num2, total);
}
sum(1, 2, 3); //if we provide arguments more than the parameters than it takes first values and ignore the rest;

sum(1); //if we provide lett argument then the functions parameter then other parameters value is undefined so we get NAN in the result
// NAN - NOT A NUMBER

sum();

function multiply(num1 = 1, num2 = 1) {
  //so the default parameter depends of the functionality of the function or as required to fulfill our desire
  const result = num1 * num2;
  console.log(num1, num2, result);
}

multiply(10);

function fullName(first, last = "") {
  const name = first + " " + last;
  console.log(name);
}
fullName("karim");

/*
some thumb rule of default value may be useful
add, sub--->0
mul---1
string-->'' //empty string

array =[]

*/
