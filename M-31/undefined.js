// undefine -- not define

let money;
console.log(money);

function total(a,b){
    console.log(a,b);
    
}
total(2);

function result(a,b) {
    if(a===undefined || b=== undefined)
    {
        return;
    }

    
}
console.log('result',result(2,3));





const phone= {
    name: 'a24',
    brand: 'samsung'
}
console.log(phone.price);


const banks=['sonali', 'rupali','jamuna'];

delete banks[1];
console.log(banks);
console.log(banks[1]);

console.log('type of undefine',typeof undefined);
console.log('type of null',typeof null);
