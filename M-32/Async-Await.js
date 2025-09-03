// const data = () => {
//   const url = "https://jsonplaceholder.typicode.com/posts/1";
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       //   displayPost(data);
//     });
//   console.log("hello");
//   console.log(true);
// };

const data = async() => {

const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
  console.log("hello");
 const json= await res.json();
 console.log(json);

  console.log(true);
};

data();