const getData1 = new Promise((resolve, reject)=>{
    const num =Math.random()*10;
    console.log('generated number',num);
    if(num>5){
        resolve({num1:num})
    }
    else{
        reject({err1:"data is not available"})
    }
    
})

// getData
// .then(data=>console.log('promise resolved',data)
// )
// .catch(error => console.log(error)
// )
const getData2 = new Promise((resolve, reject)=>{
    const num =Math.random()*10;
    console.log('generated2 number',num);
    if(num>5){
        resolve({num2:num})
    }
    else{
        reject({err2:"data is not available"})
    }
    
})

// getData
// .then(data=>console.log('promise resolved',data)
// )
// .catch(error => console.log(error)
// )

const getData3 = new Promise((resolve, reject)=>{
    const num =Math.random()*10;
    console.log('generated3 number',num);
    if(num>5){
        resolve({num2:num})
    }
    else{
        reject({err2:"data is not available"})
    }
    
})

// getData
// .then(data=>console.log('promise resolved',data)
// )
// .catch(error => console.log(error)
// )

Promise.all([getData1,getData2,getData3])
.then(data=>console.log('promise resolved',data)
)
.catch(error => console.log(error)
)


//if all the promise is satisfied then it resolve otherwise if one promise is not solved then all promise is rejected