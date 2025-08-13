/**
 * if the year is not divisible by 100 then it must be divisible by 4
 * 
 * if the year is divisible by 100 then it must be divisible by 400
 * 
 */


function isLeapYear(year){
    if(year%100 !== 0 && year%4 ===0)
    {
        return true;
    }
    else if(year%400===0)
    {
        return true;
    }
    else{
        return false;
    }
}

console.log(isLeapYear(1900));
console.log(isLeapYear(2024));
console.log(isLeapYear(2096));
console.log(isLeapYear(2100));
console.log(isLeapYear(2108));
