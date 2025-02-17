import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </tbody>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const cnt = good + neutral + bad
  if (cnt === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  const avgScore = (good - bad) / cnt
  const goodPercantage = (good / cnt) * 100

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='all' value={cnt} />
        <StatisticLine text='average' value={avgScore} />
        <StatisticLine text='positive' value={goodPercantage + ' %'} />
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodOnclick = () => setGood(good + 1)
  const handleNeutralOnclick = () => setNeutral(neutral + 1)
  const handleBadOnclick = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodOnclick} text='good' />
      <Button onClick={handleNeutralOnclick} text='neutral' />
      <Button onClick={handleBadOnclick} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
