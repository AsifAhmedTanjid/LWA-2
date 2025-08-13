/**
 * array has some duplicate elements
 *
 *
 */

const biriyanikhor = [
  "shifa",
  "asif",
  "hajjaj",
  "asif",
  "shifa",
  "asif",
  "hajjaj",
  "nill",
  "asif",
  "shifa",
];

const numbers = [1, 4, 5, 8, 4, 8, 1, 91, 61, 71, 91];

function noDuplicate(arr) {
  // console.log(arr);
  const unique = [];
  for (const item of arr) {
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }
  return unique;
}

const uniqueArray = noDuplicate(biriyanikhor);
console.log(uniqueArray);
const uniqueArray2 = noDuplicate(numbers);
console.log(uniqueArray2);
