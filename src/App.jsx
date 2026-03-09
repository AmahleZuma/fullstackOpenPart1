import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  // This is a character class
  class Character {
    constructor(age, name, parent, main) 
    {
      this.age = age;
      this.name = name;
      this.parent = parent;
      this.main = main;
    };

    // This is a method I believe
    Profile() 
    {
      console.log(`Welcome ${this.name} son of ${this.parent}. According to your file you are ${this.age} years old and your main is...${this.main}. This is perfect!`);
    };

    // Second method
    Profile2 ()
    {
      console.log(`Welcome ${this.name} daughter of ${this.parent}. According to your file you are ${this.age} years old and your main is...${this.main}. This is perfect!`);
    }
  }

  // I think this is an instance or an object
  const Andre = new Character(16, "Andre", "Hades", "Miasma");
  Andre.Profile()

  const Tina = new Character(26, "Tina", "Zeus", "Aerokenises");
  Tina.Profile2()


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

  const character = 
  {
    name: "Andre",
    parent: "Hades",
    age: 16,
    House: "House of Hades",
    Specialty: "Miasma",
    Weapon: "Mimikos",
    Declare: function () 
    {
      console.log(`${this.age}`)
    },
    doAddition: function(a,b) 
    {
      console.log(a + b)
    },
  };



  return (
    <>
    <div>
      <Header title={course}/>
      <Content session={course}/>
      <Total number={course}/>

    </div>
    
    </>
  )
}





function Header(props) {
  return(
    <h1>{props.title.name}</h1>
  );
};

// Subjects and pints
function Content(props) {
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



function Total(props) {
  return (
    <p>Number of exercises {props.number.parts[0].exercises + props.number.parts[1].exercises + props.number.parts[2].exercises}</p>
  )
}



export default App
