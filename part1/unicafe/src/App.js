import './App.css';
import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const total = good + neutral + bad;
  const average = total ? ((good * 1 + bad * -1) / total) : 0;
  const positive = total ? `${ ( (good / total) * 100) }` : '0';
  
  const feedBack = {
    'good': ()=> setGood(good+1),
    'neutral': ()=> setNeutral(neutral+1),
    'bad': ()=> setBad(bad+1),
  }

  const Button = ({ feed }) => {
    return (
      <button className='App-button' onClick={()=> feedBack[`${feed}`]()}>{feed}</button>
    )
  }
  
  return (
    <div className='App'>
      <h1 className='App-header'>Give Feedback</h1>
      <ul className='App-button-list'>
        <li><Button feed='good'/></li>
        <li><Button feed='neutral'/></li>
        <li><Button feed='bad'/></li>
      </ul>
      <h1 className='App-header'>Statistics</h1>
      <ul className='App-statistics-list'>
        <li><p>Good: {good}</p></li>
        <li><p>Neutral: {neutral}</p></li>
        <li><p>Bad: {bad}</p></li>
        <li><p>All: {total}</p></li>
        <li><p>Avarage: {average}</p></li>
        <li><p>Positive: {positive} %</p></li>
        
      </ul>
    </div>
  );
}

export default App;