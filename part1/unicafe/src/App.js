import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <button>good</button>&nbsp;<button>neutral</button>&nbsp;<button>bad</button>
      <h1>Stattistics</h1>
      <p>good</p>
      <p>neutral</p>
      <p>bad</p>
    </div>
  )
}

export default App;