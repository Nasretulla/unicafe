import { useState } from 'react'



const Button = ({handleClick, text}) =>{
  return (
    <>
    <button onClick = {handleClick}>{text}</button>
    </>
  );
  
}



const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)


 

  

  const handleGoodClick = () => {
   
    
    setGood(good + 1)
    setTotal(total + 1)
  
  }

  const handleBadClick =() => {
   
    
    setBad(bad + 1)
    setTotal (total + 1)
  }

  const handleNeutralClick = () => {
    
    setNeutral(neutral +1)
    setTotal(total + 1)
  }

 

  return (
    <>
     <h1>Give Feedback</h1>
     
     
     <Button handleClick={handleGoodClick} text="Good" />
     <Button handleClick={handleBadClick} text="Bad" />
     <Button handleClick={handleNeutralClick} text="Neutral" />


     <h1>Statistics</h1>
     good {good}
     <br/>
     neutral {neutral}
     <br/>
     bad {bad}

     <br/>
     all {total}
 
     
    </>
  )
}

export default App
