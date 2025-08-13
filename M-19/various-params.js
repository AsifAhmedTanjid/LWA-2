/**
 *
 * for a given string tell me wether it has even number of character or not
 *
 *
 */

function evenSizedString(str) {
  const size = str.length;
  console.log(str, size);
  if (size % 2 === 0) {
    console.log("even size");
    return true;
  } else {
    console.log("odd size");
    return false;
  }
}

evenSizedString("Dhaka");
evenSizedString("faka");


///array parameter

function numberOfElement(numbers){
    const len = numbers.length;
    return len;
}
numberOfElement([4,3443,22,444,222,444,34,333]);


//object as a parameter

function getAge(person){
    const age = person.age;
    return age;
}