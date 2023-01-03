import { useState } from 'react'

const Button = ({ handleClick, text }) => (  <button onClick={handleClick}>{text}</button>)

  const Statistics = (props) => { 
        const StatisticLine = (props) =>{

          return(
            <div>
              <p>
              StatisticLine {props.text} : {props.value}
              </p>
            </div>
          )
        }
    
    if (props.all === 0) {
    return ( 
    <div> No Feedback given</div>    )  } 
     return (
      <div>
          {/* <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} /> */}



          <p>Good : {props.good}</p>
          <p>Neutral : {props.neutral}</p>
          <p>Bad : {props.bad}</p>
          <p>All : {props.all}</p>
          <p>Average : {props.average}</p>
          <p>Positive : {props.positive} %</p>
         </div>
    )
  }
   
  
  
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
        {/* <StatisticLine text="good" value ={good} /> */}
       <Statistics good={good}
       neutral={neutral} 
       bad={bad}
       all={all}
       average={average}
       positive={positive} />
     
      </div>
    ) 
    
  }

export default App