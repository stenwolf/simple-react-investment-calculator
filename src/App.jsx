import { useState } from "react"

import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  const isInputValid = userInput.duration > 0;

  const handleUserInputChange = (inputId, newValue) => {
    setUserInput((prevInput) => ({
        ...prevInput, 
        [inputId]: +newValue // force newValue to be a number
    }));
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleUserInputChange}
        userInput={userInput} />
      {
        isInputValid ? <Results userInput={userInput} />
        : <p className="center">Duration must be greater than 0</p>
      }
    </>
  )
}

export default App
