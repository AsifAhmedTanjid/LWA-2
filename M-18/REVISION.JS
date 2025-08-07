/**
 * 1. const ---> used in 90% case __value not going to change
 *
 * 2.let --> value might change
 *
 * 3.var --> should not use (unless exceptional case)
 *
 */

//primitive

const price = 500; //number
const name = "Asif Ahmed Tanjid"; //string
const isPoor = true; //boolean

//non-primitive

const friends = ["Shifa", "rashed", "mahfuz"]; //array

const student = {
  class: 9,
  name: "hola khan",
  age: 17,
  address: "kochu khet",
}; //object

//condition
if (price > 500) {
  console.log("too expensive");
} else if (price == 500) {
  console.log("expensive");
} else {
  console.log("purchaseable");
}

//LOOP

let pushUp = 0;
while (pushUp < 10) {
  console.log("push up", pushUp);
  pushUp++;
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}
