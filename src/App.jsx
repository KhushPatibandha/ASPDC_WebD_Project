// Author: KhushPatibandha

import { useState } from "react"
import './App.css'

export default function App() {
  
  const [advice, setAdvice] = useState('')

  const getData = async() => {
    
    try {
      const response = await fetch('https://api.adviceslip.com/advice') // getting the data
      const data = await response.json() // waiting for the json response 
      setAdvice(data.slip.advice) // Setting the value of `advice`
    } catch(error) {
      setAdvice("Some Error had occured") // Error message
    }
    
  }

  return (
    <div className="wrapper"> 
      <div className="mainContainer">
        <h1 className="title">Random Advice Generator</h1>

        <p className="adviceParagraph">{advice}</p>
        
        <img src="\src\assets\pattern-divider-desktop.svg" alt="divider" className="divider" width={500}/>
        
        <div className="">
          <button onClick={getData}><img src="\src\assets\icon-dice.svg" alt="Dice to generate an advice" className="btn"/></button>
        </div>
      </div>
    </div>
  )
}