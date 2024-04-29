const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p> {props.part} {props.exercise}</p>
  )
}
const Content = (props) => {
  const partList = props.parts.map((item,index) => {
    return (
      <li key={index}><Part part={item.name} exercise={item.exercise} /></li>
    )
  })
  

  return (
    <ul>
      {partList}
    </ul>
    )
  }


const Total = (props) => {
  let totalSum = 0;
  props.parts.forEach((item) => {
    totalSum += item.exercise;
  })
  return (
    <p>Number of exercises {totalSum}</p>
  )
}

function App() {  
  const course = {
    name: 'Half Stack application development',
    parts : [
    {
      name:'Fundamentals of React',
      exercise : 10
    },
    {
      name: 'Using props to pass data',
      exercise : 7
    },
    {
      name: 'State of a component',
      exercise : 14
    }
  ]
}

  return (
    <div>
      <Header course = {course.name} />
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}

export default App
