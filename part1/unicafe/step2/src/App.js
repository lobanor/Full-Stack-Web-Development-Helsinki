import { useState } from 'react'


const Button = ({ handleClick, text }) => (  <button onClick={handleClick}>{text}</button>)



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
 
  const positive = (good / all) * 100
  const average = ((good - bad)/ all) 
  


  const handleGoodClick = () => {
   
    setGood(good + 1)
    setAll(good + neutral + bad + 1)
      }

  const handleNeutralClick = () => {
       setNeutral(neutral + 1)
       setAll(good + neutral + bad + 1)
       }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(good + neutral + bad + 1)
   }


  return (
    <div>
      <h1>Give Feedback</h1>
      
      <Button handleClick={handleGoodClick} text='Good' />      
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
      <h1>Statistics</h1>
      <p>Good : {good}</p>
      <p>Neutral : {neutral}</p>
      <p>Bad : {bad}</p>
      <p>All :{all}</p>
      <p>Average : {average}</p>
      <p>Positive : {positive} %</p>
      
     
    </div>
  )
  
}
export default App

