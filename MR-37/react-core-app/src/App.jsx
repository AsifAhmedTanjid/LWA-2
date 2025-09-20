

import './App.css'
import Counter from './counter';

function App() {

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
