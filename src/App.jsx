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


function App() {
  const [count, setCount] = useState(0)

  //Objects
  const profile1 = {
    name: "Percy",
    camp: "Camp Half Blood",
    parent: "Poseidon"
  }

  const profile2 = {
    name: "Jason",
    camp: "Camp Jupiter",
    parent: "Jupiter"
  }
  const profile3 = {
    name: "Magnus",
    camp: "Hotel Valhalla",
    parent: "Frey"
  }

  // const profiles = [profile1, profile2, profile3]

  // profiles.forEach((profile) => {
  //   console.log(profile.name)
  //   console.log(profile.camp)
  //   console.log(profile.parent)
  // })

  const names = [profile1.name, profile2.name, profile3.name]
  const camps = [profile1.camp, profile2.camp, profile3.camp]
  const parents = [profile1.parent, profile2.parent, profile3.parent]

  // printing out the ordered way
  // names.forEach((name) => {
  //   console.log(name)
  // })

  // camps.forEach((camp) => {
  //   console.log(camp)
  // })
  
  // parents.forEach((parent) => {
  //   console.log(parent)
  // })

  const orderedArray = [names, camps, parents]
  orderedArray.forEach((element) => {
    console.log(element)
  })

  // Arrays
  const fruits = ['apples', 'pears', 'bananas', 'jfruit', 'dfruit'];

  const [first, second, ...rest]  = fruits

  console.log(first)
  console.log(second)
  console.log(rest)

  fruits.forEach((fruit) => {
    console.log(fruit)
  })

  const fruits2 = fruits.map(value => '<p>' + value + '</p>');
  fruits2.forEach((fruit2) => {
    console.log(fruit2)
  })


  const course = 'Half Stack application development'
  // Creating Objects
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }

  const part2 = { 
    name:'Using props to pass data', 
    exercises: 7
  }


  const part3 = {
    name: 'State of a component', 
    exercises:14
  }



  return (
    <>
    <div>
      <Header course={course}/>
      <Content part1={part1} exercises1={exercises1}
      part2={part2} exercises2={exercises2}
      part3={part3} exercises3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
    
    </>
  )
}

export default App
