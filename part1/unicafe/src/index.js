import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({good, neutral, bad}) => {
	const total = good + neutral + bad
	if (total === 0)
		return (
			<div>No feedback given</div>
		)
	else return (
		<>
			<table>
				<tbody>
					<Statistic text="Good" value={good} />
					<Statistic text="Neutral" value={neutral} />
					<Statistic text="Bad" value={bad} />
					<Statistic text="All" value={total} />
					<Statistic text="Average" value={(good - bad) / total} />
					<Statistic text="Positive" value={(good / total)} />
				</tbody>
			</table>
		</>
	)
}

const Button = ({callback, text}) => <button onClick={callback}>{text}</button>

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	

	return (
		<div>
			<h1>Give feedback</h1>
			<Button callback={() => setGood(good + 1)} text="Good" />
			<Button callback={() => setNeutral(neutral + 1)} text="Neutral" />
			<Button callback={() => setBad(bad + 1)} text="Bad" />
			<h1>Statistics</h1>
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	)
}

ReactDOM.render(<App />, 
	document.getElementById('root')
)