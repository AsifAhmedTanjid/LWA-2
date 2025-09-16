
import './App.css'

function App() {
 

  return (
    <>
      <h1>React core concept</h1>
      <Person></Person>
      {/* <Sports></Sports>
      <Person></Person>
      <Sports></Sports> */}

      <Student></Student>
      <Student></Student>
      <Developer name="asif" tech="js"></Developer>
      <Developer name="shifa" tech="C#"></Developer>

  
    </>
  )
}

function Developer(props){
  console.log(props);
  
  return(

    <div style={{
      border:'2px solid green',
      borderRadius:'30px'

    }}>
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech}</p>
    </div>
  )
}

function Person(){
  const age = 17;
  const name="asif";
  const personStyle={
    color: 'blue',
    textAlign:'right',
    backgroundColor: 'cyan'
  }
  return (
    <p style={personStyle}>I am a Person: {name} {age}</p>
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

function Student(){
  return(
    <div className='student'>
      <p>Name:</p>
      <p>Department:</p>
    </div>
  )
}
export default App
