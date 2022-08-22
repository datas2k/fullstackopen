import './App.css';
import { useState } from 'react';

const StatisticLine = ({text,value}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({good,neutral,bad,total,average,positive}) => {
  if (total === 0) {
    return ( <p>No feedback given.</p> )
  } else {
    return (
      <table className='App-Table'>
        <thead>
          <tr>
            <th>Feed</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <StatisticLine text="Good" value ={good} />
          <StatisticLine text="Neutral" value ={neutral} />
          <StatisticLine text="Bad" value ={bad} />
          <StatisticLine text="All" value ={total} />
          <StatisticLine text="Avarage" value ={average} />
          <StatisticLine text="Positive" value ={positive} />
        </tbody>
      </table>
    )
  }  
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const total = good + neutral + bad;
  const average = total ? ((good * 1 + neutral * 0 +  bad * -1) / total) : 0;
  const positive = total ? `${ ( (good / total) * 100) }` : '0';
  
  const Button = ({ feed }) => {
    const feedBack = {
      'good': ()=> setGood(good+1),
      'neutral': ()=> setNeutral(neutral+1),
      'bad': ()=> setBad(bad+1),
    }
    return (
      <li><button className='App-button' onClick={()=> feedBack[`${feed}`]()}>{feed}</button></li>
    )
  }

  return (
    <div className='App'>
      <h1 className='App-header'>Give Feedback</h1>
      <ul className='App-button-list'>
        <Button feed='good'/>
        <Button feed='neutral'/>
        <Button feed='bad'/>
      </ul>
      <h1 className='App-header'>Statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
    </div>
  );
}


export default App;