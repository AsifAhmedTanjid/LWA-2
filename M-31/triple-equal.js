//=== first check the type. if type is different they are different
//if type is same then checks the value. if value is same---> true , if value is false---> false

console.log(2===2);            // true ✔️ (same type, same value)
console.log(2==='2');          // false ❌ (number vs string)
console.log(1===2);            // false ❌
console.log(true===1);         // false ❌ (boolean vs number)
console.log(false===0);        // false ❌ (boolean vs number)
console.log(null===undefined); // false ❌ (different types)
console.log(NaN===NaN);        // false ❌ (NaN never equals itself)
console.log(0==='');           // false ❌ (number vs string)
console.log([]==='');          // false ❌ (array vs string)
