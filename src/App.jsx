import { useState } from 'react'



const Button = ({handleClick, text}) =>{
  return (
    <>
    <button onClick = {handleClick}>{text}</button>
    </>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const counterGood = () =>  setGood(good +1)
  const counterBad = () => setBad (bad +1)
  const counterNeutral = () => setNeutral(neutral +1)

  const handleGoodClick = () => {
    setAll(allClicks.concat('Good'))
    const updateGood = counterGood + 1
    setGood(updateGood)
  
  }

  const handleBadClick =() => {
    setAll(allClicks.concat('Bad'))
    const updatedBAd = counterBad + 1
    setBad(updatedBAd)
  }

  const handleNeutralClick = () => {
    setAll(allClicks.concat(''))
    const updatedNeutral = counterNeutral +1
    setNeutral(updatedNeutral)
  }

  return (
    <>
     <h1>Give Feedback</h1>
     
     
     <Button handleClick={counterGood} text="Good" />
     <Button handleClick={counterBad} text="Bad" />
     <Button handleClick={counterNeutral} text="Neutral" />


     <h1>Statistics</h1>
     good {good}
     <br/>
     neutral {neutral}
     <br/>
     bad {bad}
     
    </>
  )
}

export default App
