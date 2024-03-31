import { useState } from 'react'

const Button = ({rating, handleClick}) => <button onClick={handleClick}>{rating}</button>

const StatisticLine = ({text, value}) => <p>{text}: {value}</p>

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
  const total = nofGood + nofNeutral + nofBad
  const _avg = ((nofGood - nofBad) / total) 
  const avg = _avg ? _avg : 0
  const _posPercentage = 100 * nofGood / total
  const posPercentage = _posPercentage ? _posPercentage + " %" : "0 %"

  if (total !== 0) {
    return (
      <div>
        <h1>Statistics:</h1>
        <StatisticLine text="good" value={nofGood} />
        <StatisticLine text="neutral" value={nofNeutral} />
        <StatisticLine text="bad" value={nofBad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={avg} />
        <StatisticLine text="positive" value={posPercentage} />
      </div>
    )
  }

  return <p>No feedback given</p>
  
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