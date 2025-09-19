
import './App.css'
import ToDo from './todo';
import Actor from './actor';
import Singer from './singer';

function App() {
  


  // const actors =["bappa raj","omar sunny","salman shah",'jashim'];

  const singers =[
    {id:1,name:'dr mahfuz',age:68},
    {id:2,name:'Tahsan',age:48},
    {id:3,name:'dr hela',age:58},
  ]
  return (
    <>
      <h1>React core concept</h1>

    {
      singers.map(singer=><Singer key={singer.id} singer={singer}></Singer>)
    }

    {/* {
      actors.map(actor => <Actor actor={actor}></Actor>)
    } */}



      {/* <Person></Person>
      <Sports></Sports>
      <Person></Person>
      <Sports></Sports>
      <ToDo task='learn React' isDone={true}></ToDo>
      <ToDo task='revise js' isDone={false}></ToDo>
      <ToDo task='go out' isDone={false}></ToDo>

      <Student></Student>
      <Student></Student>
      <Developer name="asif" tech="js"></Developer>
      <Developer name="shifa" tech="C#"></Developer>
      <Player name='tamim' run='4000'></Player>
      <Player name='mushfiq' run='3000'></Player> */}
      

  
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
