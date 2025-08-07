

const friends =['asif', 'shifa','hajjaj', 'akash'];

friends.sort();
console.log(friends);

const numbers = [4,1,63,5222,533,4,23,2,1,5667];
console.log(numbers);

// using sort funtion
numbers.sort();  //gives wrong sorting because it compares as string such 23 comes before 4
console.log(numbers);


//ascending
const ages =[1,2,34,100,344,12,4,22,77]
const sorted_ages = ages.sort(function(a,b){return a - b})
console.log(sorted_ages);

// descending
const sorted_ages_desc = ages.sort(function(a,b){return b - a})
console.log(sorted_ages_desc);