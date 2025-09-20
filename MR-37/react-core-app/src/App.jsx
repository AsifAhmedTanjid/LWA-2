import { Suspense } from 'react';
import './App.css'
import Batsman from './Batsman';
import Counter from './counter';
import  Users from './Users'
import Friends from './Friends';


const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())


const fetchFriends = async()=>{
  const res= await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();

}






function App() {

  const friendsPromise =fetchFriends();

  function handleClick(){
    alert("iam clicked")
  }

  const handleClick3 =()=>{
    alert("ALERT 3");
  }


  const handleAdd5 =(num)=>{
    const newNum=num+5;
    alert(newNum)
  }

  return (
    <>
      <h3>Vite + React</h3>
      
      <Suspense fallback={ <h3>Loading...</h3> }>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
      
      <Suspense fallback={ <h3>Friends Are Coming...</h3> }>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      <Batsman></Batsman>

      <Counter></Counter>
      <button onClick={handleClick}>Click me</button> 
      {/* shall not wite handleClick(). if we add () then it executed immedietly */}

      <button onClick={function handleClick2(){
        alert("click 2")
      }}>Click me</button>

      {/* this is not the standard.^ */}


      <button onClick={handleClick3}>Click me 3</button>
      <button onClick={()=>alert("click 4")}>Click me 4</button>
      <button onClick={()=>handleAdd5(7)}>Add 5</button>
    </>
  )
}

export default App
