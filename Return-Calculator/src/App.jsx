import { useState } from "react"

import Header from "./Components/Header"
import UserInput from "./Components/UserInput"
import Result from "./Components/Result"

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 12000,
    expectedReturn: 5,
    duration: 10,
  })

  const inputIsValid= userInput.duration>=1

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +[newValue]
      }
    })
  }



  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleChange} />
      {inputIsValid?<Result userInput={userInput}/>:<p className="center">Please Enter a Duration greater than zero </p> }
    </>
  )
}

export default App
