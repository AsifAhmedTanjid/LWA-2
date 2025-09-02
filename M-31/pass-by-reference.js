//all primitive values (number .string.boolean) always pass by value
//all non-primitive values (object,array) always passed by reference 


//primitive
function multiply(x, y) {
  x = x + 5;
  y += 5;
  const mult = x * y;
  return mult;
}
const a = 10;
const b = 5;

console.log("before the function call", a, b);

// const result=multiply(10,5);
const result = multiply(a, b);
console.log(result);
console.log("after the function call", a, b);


//non primitive

const manik = { name: "manik", money: 40000 };
const roton = { name: "roton", money: 50000 };
console.log("before the function call", manik, roton);


function totalMoney(person1,person2){
    person1.money=0;
    person2.money/=2;
    const total =person1.money+person2.money;
    return total;

}

    
const totalBalance =totalMoney(manik,roton);
console.log("total",totalBalance);
console.log("After the function call", manik, roton);