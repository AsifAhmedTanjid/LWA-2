const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      displayPost(data);
    });
};
// //array of object
// const displayPost=(posts)=>{
//     console.log(posts);
//     // for(i=0;i<posts.length;i++){
//     //     console.log(posts[i]);

//     // }
//     // for(let post of posts){
//     //     console.log(post);

//     // }

//     //1. get the container and empty the container
//     const postContainer=document.getElementById('post-container');
//     postContainer.innerHTML='';
//     // console.log(postContainer);

//     posts.forEach(post => {
//         // console.log(post.title);
//         // 2.create html element
//         const li=document.createElement('li');
//         li.innerText=post.title;
//         // console.log(li);

//         //3. add li into container
//         postContainer.appendChild(li);

//     });

// }

//array of object
const displayPost = (posts) => {
  //1. get the container and empty the container
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";
  // console.log(postContainer);

  posts.forEach((post) => {
    // 2.create html element
    const postCard = document.createElement("div");
    postCard.innerHTML = `        <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>`
   

    //3. add li into container
    postContainer.appendChild(postCard);
  });
};

loadPost();
