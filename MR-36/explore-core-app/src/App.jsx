
import './App.css'

function App() {
 

  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Sports></Sports>
      <Person></Person>
      <Sports></Sports>

  
    </>
  )
}

function Person(){
  const age = 17;
  const name="asif"
  return (
    <p>I am a Person: {name} {age}</p>
  )
}

function Sports(){
  return(

    <div>
      <h3>Cricket</h3>
      <ul>
        <li>Hello</li>
        <li>jsx</li>
        <li>AND</li>
        <li>javascript</li>
      </ul>
      <p>Playing and loosing</p>
    </div>

  )
}

export default App
