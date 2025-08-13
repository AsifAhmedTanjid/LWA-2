const jim = 97;
const tim = 35;
const kim = 99;

if (jim > tim && jim > kim) {
  console.log("jim is max");
} else if (tim > jim && tim > kim) {
  console.log("tim is max");
} else {
  console.log("kim is max");
}

//max using Math.max


const max =Math.max(18,22,14,133,1111);
console.log(max);
