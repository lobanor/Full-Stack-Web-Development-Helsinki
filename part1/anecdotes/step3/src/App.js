const Header = (props) => {
  return (
    <div>
<h1>{props.course}</h1>
      </div>
  )
}

const Content = (props) => {
  return (
    <div>
<p>{props.pt1} {props.exe1}</p>
<p>{props.pt2} {props.exe2}</p>
<p>{props.pt3} {props.exe3}</p>

      </div>
  )
}

const Total = (props) => {
  return (
    <div>
<p>{props.naration}{props.total}</p>

      </div>
  )
}

const App = () => {
// const-definitions

//
const course = 'Half Stack application development'
const part1 = 'Fundamentals of React '
const exercises1 = 10
const part2 = 'Using props to pass data '
const exercises2 = 7
const part3 = 'State of a component '
const exercises3 = 14

return (
  <div>
    <Header course={course} />
    <Content pt1={part1}exe1={exercises1}
        pt2={part2} exe2={exercises2}
        pt3={part3} exe3={exercises3} />
    <Total naration ='Number of exercises 'total={exercises1 + exercises2 + exercises3} />
 
  </div>
)
}

export default App
