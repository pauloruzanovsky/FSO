import { useState } from 'react'
import Button from './Button'
import Vote from './Vote'
import Anecdote from './Anecdote'
import TopAnecdote from './TopAnecdote'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  const selectRandomAnecdote = () => {
    const nextAnecdote = Math.floor(Math.random() * anecdotes.length)
    setSelected(Math.floor(nextAnecdote))
  }

  const vote = () => {
    const newPoints = [...points]
    newPoints[selected] += 1
    setPoints(newPoints)
  }

  return (
    <div>
      <Anecdote anecdotes={anecdotes} selected={selected} points={points}/>
      <Vote vote={vote}/>
      <Button selectRandomAnecdote={selectRandomAnecdote}/>
      <TopAnecdote anecdotes={anecdotes} points={points}/>


    </div>
  )
}

export default App