
import './App.css'
import ToDo from './todo';

function App() {
 

  return (
    <>
      <h1>React core concept</h1>
      <Person></Person>
      {/* <Sports></Sports>
      <Person></Person>
      <Sports></Sports> */}
      <ToDo task='learn React' isDone={true}></ToDo>
      <ToDo task='revise js' isDone={false}></ToDo>
      <ToDo task='go out' isDone={false}></ToDo>

      <Student></Student>
      <Student></Student>
      <Developer name="asif" tech="js"></Developer>
      <Developer name="shifa" tech="C#"></Developer>
      <Player name='tamim' run='4000'></Player>
      <Player name='mushfiq' run='3000'></Player>
      

  
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

// const {name, run}={name:'tamim',run:'4000'}
function Player({name,run}){
  return(
    <div className='student'>
      <p>Name: {name}</p>
      <p>Runs: {run}</p>
    </div>
  )
}
export default App
