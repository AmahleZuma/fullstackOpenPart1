import { useState } from 'react'

function Header(props) {
  console.log(props)
  return(
    <h1>{props.course}</h1>
  );
};

function Part(props) {
  console.log()
  return(
    <p>{props.name} {props.exercises}</p>
  )
}

function Content(props) {
  console.log(props)
  return (
    <div>
        <Part  name={props.part1} exercises={props.exercises1}/>
        <Part  name={props.part2} exercises={props.exercises2}/>
        <Part  name={props.part3} exercises={props.exercises3}/>
    </div>

  
  );
}

function Total(props) {
  return (
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}

function Mod(props) {
  return(
    <p>{props.mod}</p>
  )
}

function Modules(props) {
  console.log(props)
  return(
    <>
      <Mod mod={props.module1}/>
      <Mod mod={props.module2}/>
      <Mod mod={props.module3}/>
    </>

  )
}

function App() {
  const [count, setCount] = useState(0)
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const module1 = 'Mathematics'
  const module2 = 'Bio'
  const module3 = 'Physics'


  return (
    <>
    <div>
      <Header course={course}/>
      <Content part1={part1} exercises1={exercises1}
      part2={part2} exercises2={exercises2}
      part3={part3} exercises3={exercises3}/>
      <Modules module1={module1} module2={module2} module3={module3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
    
    </>
  )
}

export default App
