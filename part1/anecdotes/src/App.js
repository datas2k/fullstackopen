import React, { useState, useEffect } from "react";
import './App.css';

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
];

const Header = ({text}) => {
  return (
    <h1 className='App-header'>{text}</h1>
  )
}

const Anecdote = ({text}) => {
  return ( <li><span>{text}.</span>&nbsp;&nbsp;{anecdotes[text]}</li> )
}

const Votes = ({text,array}) => {
  return ( <li className='App-Votes'>Has <span className='voteCounter'>{array[text]}</span> votes</li> )
}

function App() {
  const [selected, setSelected] = useState(0);
  const [mostVoted, setMostVoted] = useState(0);
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

  useEffect(() => {
    const most = votes.indexOf(Math.max(...votes));
   if (votes[most] <= votes[mostVoted]) {
      return;
    }
    setMostVoted(most);
  }, [votes, mostVoted]);


  return (
    <div className='App'>
      <ul className='App-ButtonList'>
        <li><ButtonVote/></li>
        <li><ButtonRND/></li>
      </ul>
      <ul className='App-text'>
        <Header text='Anecdote of the day'/>
        <Anecdote text={selected}/>
        <Votes text={selected} array={votes}/>
        <Header text='Anecdote with most votes'/>
        <Anecdote text={mostVoted}/>
      </ul>
    </div>
  )
}

export default App;