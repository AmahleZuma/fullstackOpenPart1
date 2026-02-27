import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)


  const course = { 
    
      name:'Half Stack application development',

      parts : [
        {
          name: 'Fundamentals of React', 
          exercises: 10
        },

        {
          name: 'Using props to pass data', 
          exercises: 7
        },

        {
          name: 'State of a component', 
          exercises: 14
        },
      
      ]
  };






  return (
    <>
    <div>
      <Header course={course}/>
      <Content session={course}/>
      {/* <Total parts={course}/> */}

    </div>
    
    </>
  )
}





function Header(props) {
  return(
    <h1>{props.course.name}</h1>
  );
};

// Subjects and pints
function Content(props) {
  console.log(props)
  return (
    <div>
        <Part  part={props.session.parts[0]}/>
        <Part  part={props.session.parts[1]}/>
        <Part  part={props.session.parts[2]}/>
    </div>

  
  );
}

function Part(props) {
  return(
    <p>{props.part.name} {props.part.exercises}</p>
  )
}



// function Total(props) {
//   return (
//     <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
//   )
// }



export default App
