const fruits = ["pomegranade", "apple", "watermelon", "banana"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}

let k = 0;
while (k < fruits.length) {
  console.log(fruits[k]);
  k++;
}
