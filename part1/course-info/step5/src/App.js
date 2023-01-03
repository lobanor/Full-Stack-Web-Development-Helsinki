
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
      }
    ]
  }
  // 
  const [first, second, third] = course.parts

  return (
    <div>
      <h1>{course.name}</h1>
      <p>{first.name} {first.exercises}</p>
      <p>{second.name} {second.exercises}</p>
      <p>{third.name} {third.exercises}</p>
      <p><b>Total {first.exercises + second.exercises + third.exercises}</b></p>
    </div>
  )
}










export default App
