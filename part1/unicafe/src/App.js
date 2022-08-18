import './App.css';
import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  const handleClick = (data) => {
    switch (data) {
      case 'good':
        setGood(good+1)
        break;
      case 'neutral':
        setNeutral(neutral+1)
        break;
      case 'bad':
        setBad(bad+1)
        break;
      default:
        break;
    }
  };

  const Button = ({ feed }) => {
    return (
      <button className='App-button' onClick={()=> handleClick(feed)}>{feed}</button>
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
        <li><p>good: {good}</p></li>
        <li><p>neutral: {neutral}</p></li>
        <li><p>bad: {bad}</p></li>
      </ul>
    </div>
  );
}

export default App;