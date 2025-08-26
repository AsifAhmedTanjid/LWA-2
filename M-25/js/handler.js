// console.log('handler added');

    document.getElementById('btn-update-title').addEventListener('click', function(){
        // console.log('button clicked');
        const pageTitleElement = document.getElementById('page-title');
        // console.log(pageTitleElement);
        pageTitleElement.innerText = 'Updated page title';
        
        
    })


    document.getElementById('btn-login').addEventListener('click',function(){
    // console.log('login clicked');
    const userInfoEl = document.getElementById('user-info');
    userInfoEl.innerText = 'user Logged in';
    
})
