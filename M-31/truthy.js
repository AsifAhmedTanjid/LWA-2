let data; //falsy (undefine)
data=0; //falsy
data=''; //falsy
data=null //falsy
data=false //falsy
data=' '; //truthy
data='0' //truthy
data= true //truthy
data=[]; //truthy
data={} //truthy
console.log('value of data', data);

if (data) {
    console.log(data,' is truthy');
    
    
}
else{
    console.log(data,'is falsy');
    
}

// if i need to capture  the falsy value to go inside if block
if(!data){ //! logical not
console.log('inside if with a falsy value');

}
else{
   console.log('inside if with a truthy value');
}



//capture all positive value
//double not !!
//to capture any value to boolean (true /false)
if(!!data===true){
    console.log('only true inside double not');
    
}