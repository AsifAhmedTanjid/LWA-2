class Vehicle{
    #tin
    constructor(type,brand,price){
        this.type=type;
        this.brand=brand;
        this.price=price;
        this.#tin='1111';
    }
    getThis(){
        console.log(this);
        
    }
    getPrice(){
        return this.price;
    }
    getTin(){
        return this.#tin;
    }
}
const car1=new Vehicle('car','honda',20000000);
const car2=new Vehicle('car','toyota',50000000);
car1.getThis();
console.log(car1.getPrice());
console.log(car2.getPrice());
console.log(car1.price);


const student ={
    name: 'rahul',
    score: 10000,
    getScore: function(){
        console.log(this);
        
    },
    getScoreArrow:()=>{
        console.log(this);
        
    }
}
student.getScore();
student.getScoreArrow();
console.log('ultimate this',this);
// console.log(car1.#tin); not accessable beacuse this is private. it is called encapsulation. hiding data

console.log(car1.getTin());
