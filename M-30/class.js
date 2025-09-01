/**
 * 
 * class--->template
 * 
 * properties
 * 
 * method--> a special type of function inside a class without the duntion keyword
 * object
 */

class Player{
    constructor(name,age){
        this.name=name;
        this.age=age;
        this.location='bangladesh'
        // console.log('calling the constructor',name);
        
    }
    goal(){
        console.log('score a goal');
        
    }
    getTeamName(){
        return console.log('barca');
        
    }

}

const player1=new Player('hello js',30)
const player2=new Player('hello css',11)
console.log(player1 instanceof Player);
console.log(player2);
player1.goal();
player1.getTeamName();
