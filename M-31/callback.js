//callback

function pakhibhai(callMeBack,patro,patri){
    console.log('value of patro',patro);
    // console.log('callmeback parameter',callMeBack);
    
    if(patri){
        // console.log(callMeBack);
        callMeBack(patro);
        
    }
    else{
        console.log('no weeding');
        
    }
}

// pakhibhai();
function callSomeone(person){
    console.log('calling', person);
    
}
// callSomeone('jodu')
pakhibhai(callSomeone,'jodu','modu');
// document.getElementById('h1').addEventListener('click',()=>{

// }) //used call back funtion here

// [1,2,3].map(x=>x+5); here is also a callback funtion