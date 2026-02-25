import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)


  const course = 'Half Stack application development'

  const parts = [
    {name: 'Fundamentals of React', exercises: 10},
    {name: 'Using props to pass data', exercises: 7},
    {name: 'State of a component', exercises: 14}
  ]
  
  const campProfiles = [
    {name: 'Percy', parent: 'Poseidon', camp: 'Half Blood', bar:5},
    {name: 'Jason', parent: 'Jupiter', camp:'Jupiter', bar:5},
    {name: 'Thalia', parent: 'Zeus', camp:'Half Blood', bar:4},
    {name:'Nico', parent:'Hades', camp:'Half Blood', bar:4},
    {name:'Magnus', parent:'Frey', camp:'Hotel Valhalla', bar:4},
    {name:'Carter', parent:'Julius', camp:'Brooklyn House', bar:4},
    {name: 'Leo', parent:'Hephaestus', camp:'Half Blood', bar:4}
    {name:'Annabeth', parent:'Athena', camp:'Half Blood', bar:3},
    {name:'Luke', parent:'Hermes', camp:'Half Blood', bar:3},
    {name:'Sadie', parent:'Julius', camp:'Brooklyn House', bar:3},
    {name:'Alex', parent:'Loki', camp:'Hotel Valhalla', bar:3},
    {name: 'Frank', parent:'Mars', camp:'Jupiter', bar:3},
    
  ]




  return (
    <>
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
    
    </>
  )
}





function Header(props) {
  console.log(props)
  return(
    <h1>{props.course}</h1>
  );
};

// Subjects and pints
function Content(props) {
  console.log(props)
  return (
    <div>
        <Part  parts={props.parts[0]}/>
        <Part  parts={props.parts[1]}/>
        <Part  parts={props.parts[2]}/>
    </div>

  
  );
}

function Part(props) {
  console.log(props)
  return(
    <p>{props.parts.name} {props.parts.exercises}</p>
  )
}



function Total(props) {
  return (
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}




export default App
