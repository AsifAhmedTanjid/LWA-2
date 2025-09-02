function add(a,b){
    console.log(arguments); //array like object
    const params=[...arguments] //made the array like object into array using spread (...)
    console.log(params); //now we can use all the function like map filter etc as it is now an array
    
    
}
add(66,77,77,99);