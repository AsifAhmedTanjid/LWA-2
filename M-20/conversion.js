// 12 inch = 1feet

function inchToFeet(inch){
    
    const feet = inch/12;
    return feet;

}

const asifHeight = inchToFeet(66);
console.log('The Height of Asif is: ', asifHeight ,'ft');
// console.log(asifHeight);


function inchToFeet2(inch){
    const feet = parseInt(inch/12);
    const inchRemaining = inch%12;
    return 'The Height of Tanjid is: '+ feet + ' ft ' + inchRemaining + ' inch.';
}

const tanjidHeight= inchToFeet2(14);

console.log(tanjidHeight);

function kiloToMile(kilo){
    const mile = kilo * 0.621371;
    return mile;
}

console.log(kiloToMile(1));
