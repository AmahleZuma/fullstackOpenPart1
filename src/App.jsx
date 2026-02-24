import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)


  const course = 'Half Stack application development'

  const parts = [
    {name: 'Fundamentals of React', exercises: 10},
    {name: 'Using props to pass data', exercises: 7},
    {name: 'State of a component', exercises: 14}
  ]
  
  const campProfiles = {
    {name: 'Percy', parent: 'Poseidon', camp: 'Half Blood',},
    // {name:, parent:, camp:,},
    // {name:, parent:, camp:,},
  }




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

function Part(props) {
  console.log(props)
  return(
    <p>{props.parts.name} {props.parts.exercises}</p>
  )
}

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

function Total(props) {
  return (
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}




export default App
