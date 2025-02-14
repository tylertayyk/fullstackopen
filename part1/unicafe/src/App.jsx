const Part = (props) => {
  return (
    <p>{props.part} {props.exercise}</p>
  )
}

const Content = () => {
  const contents = [
    { part: 'Fundamentals of React', exercise: 10 },
    { part: 'Using props to pass data', exercise: 7 },
    { part: 'State of a component', exercise: 14 },
  ]
  return (
    <div>
      <Part part={contents[0].part} exercise={contents[0].exercise} />
      <Part part={contents[1].part} exercise={contents[1].exercise} />
      <Part part={contents[2].part} exercise={contents[2].exercise} />
      <p>Number of exercises {contents[0].exercise + contents[1].exercise + contents[2].exercise}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  return (
    <div>
      <h1>{course}</h1>
      <Content />
    </div>
  )
}

export default App
