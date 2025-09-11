function one(){
    two()
    console.log(1);
    
}
function two(){

    three()
    console.log(2);
    
}
function three(){
    setTimeout(()=>{ //this goes to event queue rather than call stack . so even if there is no timeout it executes later when call stack is cleared
        console.log('inside three timeout');
        
    },0)
    four()
    console.log(3);
    
}
function four(){

            setTimeout(()=>{ 
        console.log('inside four timeout');
        
    },2000)
    five()
    console.log(4);
    
}
function five(){
                setTimeout(()=>{ 
        console.log('inside five timeout');
        
    },0)

    // one() //infinity loop and maximum call stack size exceeded
    console.log(5);
    
}
one()