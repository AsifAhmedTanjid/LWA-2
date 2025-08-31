const product ={
    name:'shirt',
    price: 500,
    quantity: 7
}



// const discount =product.price*10/100;
// const youPay =product.price-discount;
// const vatAmount = product.price*7/100;
// const totalAmount= youPay+vatAmount;


const price =product.price;
const discount =price*10/100;
const youPay =price-discount;
const vatAmount = price*7/100;
const totalAmount= youPay+vatAmount;

// destructuring obj

const device ={
    names: 'phone',
    brand:'samsung',
    prices:180000
}

const {names,brand,prices ,used='no'} =device;


console.log(brand,names,prices);

//destructuring array

const numbers=[1,2,3,4];
const [first,second]=numbers;
console.log(first,second);


// -------------------------//

const [first1,second1]=[99,100];

console.log(first1,second1);