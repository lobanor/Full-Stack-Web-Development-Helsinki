
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {  name: 'Fundamentals of React',   exercises: 10 },
    {  name: 'Using props to pass data', exercises: 7 },
    {  name: 'State of a component', exercises: 14   }
  ]
  //  Individual items of an array are easy to assign to 
  //  variables with the help of the destructuring assignment

  const [first, second, third] = parts
  return (
    <div>
       <h1>{course}</h1>
   <p>{first.name} {first.exercises}</p>
   <p>{second.name} {second.exercises}</p>
   <p>{third.name} {third.exercises}</p>
   <p>Total {first.exercises + second.exercises 
              + third.exercises}</p>
    </div>
  )
}


export default App
