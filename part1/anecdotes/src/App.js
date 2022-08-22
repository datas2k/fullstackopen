import './App.css';
import { useState } from 'react'

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
];

const Anecdote = ({text,array}) => {
  return (
    <ul className='App-text'>
      <li>{anecdotes[text]}</li>
      <li>Has <span className='voteCounter'>{array[text]}</span> votes</li>
    </ul>
  )
}

function App() {
  const [selected, setSelected] = useState(0);
  
  const initVotes = Array(anecdotes.length).fill(0);
  const [votes, setVotes] = useState(initVotes)

  const genRND = () => {
    return Math.floor(Math.random() * anecdotes.length);
  };

  const handleRNDClick = () => {
    let rnd = genRND();
    while (rnd === selected) {
      rnd = genRND();
    }
    setSelected(rnd);
  }

  const handleVoteClick = () => {
    let refreshVotes = [...votes];
    refreshVotes[selected]++;
    setVotes(refreshVotes);
  }

  const ButtonRND = () => {
    return (
      <button className='App-button' onClick={handleRNDClick}>Random Anecdote</button>
    )
  }

  const ButtonVote = () => {
    return (
      <button className='App-button' onClick={handleVoteClick}>Vote</button>
    )
  }

  return (
    <div className='App'>
      <ul className='App-ButtonList'>
        <li><ButtonVote/></li>
        <li><ButtonRND/></li>
      </ul>
      <Anecdote text={selected} array={votes}/>

    </div>
  )
}

export default App;