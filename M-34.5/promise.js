const getData = new Promise((resolve, reject)=>{
    const num =Math.random()*10;
    console.log('generated number',num);
    if(num>5){
        resolve({num:num})
    }
    else{
        reject({err:"data is not available"})
    }
    
})

getData
.then(data=>console.log('promise resolved',data)
)
.catch(error => console.log(error)
)