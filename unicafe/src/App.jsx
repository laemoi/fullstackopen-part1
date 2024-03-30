import { useState } from 'react'

const Button = ({rating, handleClick}) => <button onClick={handleClick}>{rating}</button>

const Feedback = ({fbGood, fbNeutral, fbBad}) => {
  return (
    <div>
      <h1>Give feedback:</h1>
      <Button rating="good" handleClick={fbGood} />
      <Button rating="neutral" handleClick={fbNeutral} />
      <Button rating="bad" handleClick={fbBad} />
    </div>
  )
}

const Statistics = ({nofGood, nofNeutral, nofBad}) => {
  return (
    <div>
      <h1>Statistics:</h1>
      <p>good: {nofGood}</p>
      <p>neutral: {nofNeutral}</p>
      <p>bad: {nofBad}</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Feedback
        fbGood={() => setGood(good + 1)}
        fbNeutral={() => setNeutral(neutral + 1)}
        fbBad={() => setBad(bad + 1)}
      />
      <Statistics nofGood={good} nofNeutral={neutral} nofBad={bad} />
    </div>
  )
}

export default App