const Header = (course) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Content = (part1, ex1, part2, ex2, part3, ex3) => {
  return (
    <div>
      <p>{part1} {ex1}</p>
      <p>{part2} {ex2}</p>
      <p>{part3} {ex3}</p>
    </div>
  )
}

const Total = (ex1, ex2, ex3) => {
  return (
    <div>
      <p>Number of exercises {ex1 + ex2 + ex3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header course={course} />
      <Content  part1={part1} part2={part2} part3={part3}
                ex1={exercises1} ex2={exercises2} ex3={exercises3}
      />
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3} />
    </>
  )
}

export default App