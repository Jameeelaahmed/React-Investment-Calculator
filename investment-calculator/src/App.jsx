import "./App.css";
import Header from "./Components/Header/Header";
import InputGroup from "./Components/input-group/InputGroup";
import Inputs from "./Components/user-inputs/Inputs";
import { calculateInvestmentResults} from "./util/investment";
import Result from "./Components/Result/Result";
import { useState } from 'react';
function App() {
  // ! START two way binding state
  const [initialInvestment,setInitialInvestment]=useState("");
  const [annualInvestment,setAnnualInvestment]=useState("");
  const [expectedReturn,setExpectedReturn]=useState("");
  const [duration,seteDuration]=useState("");

  function handleInitialInvestment(event){
    setInitialInvestment(+event.target.value);
  }
  function handleAnnualInvestment(event){
    setAnnualInvestment(+event.target.value);
  }
  function handleExpectedReturn(event){
    setExpectedReturn(+event.target.value);
  }
  function handleDuration(event){
    seteDuration(+event.target.value);
  }

  const durationIsValid=duration>=1;
  const initialInvestmentIsValid=initialInvestment>=0;
  const annualInvetstmentIsValid=annualInvestment>=0;
  const expectedReturnIsValid=expectedReturn>=0;

  // ? MAX'S CODE 
  // * const [userInput,setUserInput]=useState({
  // * initialInvestment:10000
  // * annualInvestmnet:1200
  // * expectedReturn: 6
  // * duration:10  
  // *  })
  // * function handleChange(inputIdentifier,newValue){
  // * setUserInput((prevUserInput) => {
  // * return{
  // * ...prevUserInput,
  // * [inputIdentifier]:newValue
  // * }
  // * })
  // *}
  // * <input 
  // * value ={userInput.annualInvestment} 
  // * onSelect={(event) => handleChange("InitialInvestment",event.target.value)}
  // * handleResultTwo={handleDuration}
  // * ></input>
  // ? 4 inputs way not 2 as i did 

  // ! END two way binding state

  // ! end PASSING STATE VALUES TO FUNCTION
  const tableValues={initialInvestment,annualInvestment,expectedReturn,duration};
  const results=calculateInvestmentResults(tableValues)
  // ! end PASSING STATE VALUES TO FUNCTION

  // ! START FORMATING
  // const formattedData = results.map(item => ({
  //   year: item.year,
  //   interest: formatter.format(item.interest),
  //   valueEndOfYear: formatter.format(item.valueEndOfYear),
  //   annualInvestment: formatter.format(item.annualInvestment),
  // }));
  // ! END FORMATING

  return (
    <>
      <Header></Header>
      <InputGroup>
        <Inputs 
        label1="Initial Investment" 
        label2="Annual Investment"
        handleResultOne={handleInitialInvestment}
        handleResultTwo={handleAnnualInvestment}
        ></Inputs>
        <Inputs 
        label1="Expected Return" 
        label2="Duration"
        handleResultOne={handleExpectedReturn}
        handleResultTwo={handleDuration}
        ></Inputs>
      </InputGroup>
      {(!durationIsValid || !initialInvestmentIsValid || !expectedReturnIsValid || !annualInvetstmentIsValid )&&  <p className="center">Please input valid input data</p>}
      {(durationIsValid && initialInvestmentIsValid && expectedReturnIsValid && annualInvetstmentIsValid) && <Result result={results}></Result>} 
    </>
  );
}

export default App;
