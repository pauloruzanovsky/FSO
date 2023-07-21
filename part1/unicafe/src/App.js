import { useState } from 'react'
import Feedback from './Feedback'
import Statistics from './Statistics'


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const average = ((good - bad)/total).toFixed(2)
  const positive = ((good / total)*100).toFixed(2)

  const handleClick = (e) => { 
    if (e.target.textContent === 'good') {
      setGood(good + 1)
    } else if (e.target.textContent === 'neutral') {
      setNeutral(neutral + 1)
    } else if (e.target.textContent === 'bad') {
      setBad(bad + 1)
    }
  }

  return (
    <div>
      <Feedback handleClick={handleClick}/>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive}/>
    </div>
  )
}

export default App