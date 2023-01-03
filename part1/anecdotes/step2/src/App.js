import { useState } from 'react'

const Button = ({ handleClick, text }) => (  <button onClick={handleClick}>{text}</button>)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ] // const anecdotes = [
  //   {  name:  'If it hurts, do it more often.',votes:0 },
  //   {  name:  'Adding manpower to a late software project makes it later!',votes:0 },
  //   {  name:  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',votes:0 },
  //   {  name:  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',votes:0 },
  //   {  name:  'Premature optimization is the root of all evil.',votes:0 },
  //   {  name:   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',votes:0 },
  //   {  name:  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',votes:0 }
  // ]
 
  const points = { 0: 0, 1: 0, 2: 0, 3: 0 }

  const copy = { ...points }
  // increment the property 2 value by one
  copy[2] += 1     
  
  const [first, second, third, ... rest] = anecdotes
  const [selected, setSelected] = useState(0)
  
  const nextValue = anecdotes[Math.floor(Math.random() * anecdotes.length)]
   const handleNextClick = () => {
    setSelected(nextValue)
  console.log(nextValue)}

  const handleVotesClick = () => {
    setSelected(
      copy[2]+1
    )
  console.log(nextValue)}

  return (
    <div>
     <p>{selected}</p> 
    <p><Button handleClick={handleNextClick} text='Next Anactode' />
       <Button handleClick={handleVotesClick} text='Vote' />
     </p>
    <p>{first.name} {first.votes}</p>      
    </div>
  )
}

export default App
