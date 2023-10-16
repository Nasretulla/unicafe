import { useState } from 'react'


const Button = ({handleClick, text}) =>{
  return (
    <>
    <button onClick = {handleClick}>{text}</button>
    </>
  ); 
}

const StatisticLine = ({text, value}) => {
  return(
    <>

    <table>
    <tr>
    <td>
      
    {text} {value}

   </td>

    </tr>

    </table>

    </>
  )


}

const Statistics = ( {good, bad, neutral, total}) =>{

  if(total == 0){
    return <p>No feedback given</p>

  }

  const average = total > 0 ? ((good - bad) / total) : 0;
  const positivePercentage = total > 0 ? (good / total) * 100 : 0; 

  return (
    <>
    
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positivePercentage} />
    </>
  );
 
}


const App = () => {
  console.log("tämä on testi appista");
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

     <Statistics good={good}  bad= {bad} neutral={neutral}  total={total}

/>

      
    </>
  )
   
  
}
export default App
