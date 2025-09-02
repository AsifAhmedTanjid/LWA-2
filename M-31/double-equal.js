
//type coercion (type convert)
//for == if one value is string another is number: converts string into number then compare

//if one is boolean and another is number. converts boolean to number

console.log(2==2);           // true ✅
console.log(2=='2');         // true ✅ (string coerced to number)
console.log(2=='12');        // ❌ false ✅
console.log(1==2);           // ❌ false ✅
console.log(true==1);        // true ✅ (true → 1)
console.log(true=='1');      // true ✅ ('1' → 1)
console.log(false==0);       // true ✅ (false → 0)
console.log(false=='0');     // true ✅ ('0' → 0 → equals false)
console.log(null==undefined);// true ✅ (special rule)
console.log(NaN==NaN);       // ❌ false  (NaN never equals itself)

console.log(0=='');          // true ✅ ('' → 0)
console.log([]=='');         // true ✅ ([] → '' when toString, then '' == '')
console.log([5]=='5');       // true ✅ ([5] → '5')
console.log([5]==5);         // true ✅ ([5] → '5' → 5)
console.log({}=={});         // ❌ FALSE (different object references)
console.log([5]==[5]);       // ❌ false  (different array references)

console.log([5].toString()); // "5" ✅

const p = [1,2,4];
const q = p;
console.log(p==q);           // true ✅ (same reference)



