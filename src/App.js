import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FirstQuestion from "./components/FirstQuestion";
import SecondQuestion from "./components/SecondQuestion";
import ThirdQuestion from "./components/ThirdQuestion";
import FourthQuestion from "./components/FourthQuestion";
import Splash from "./components/Splash";
import GetUserName from "./components/getUserName";
import Win from "./components/Win";
import Looser from "./components/Looser";
const totalSteps = 7;

function App() {
  const [step, setStep] = useState(1);
  // const [contestDetails, setContestDetails] = useState(null);

  const handleStepChange = (type) => {
    if (step === totalSteps && type === "next") {
      return alert("You have already completed the last step");
    }
    if (type === "next") {
      if (step < totalSteps) {
        setStep(step + 1);
      }
    }
  };
  const isWinner = true;
  const handleContestDetailsSubmit = (data) => {
    // setContestDetails(data);
    setStep(step + 1);
  };
  return (
    <>
      {step === 1 && <Splash handleStepChange={handleStepChange} />}
      {step === 2 && <GetUserName handleStepChange={handleStepChange} />}{" "}
      <div className="content__card ">
        {step === 3 && <FirstQuestion handleStepChange={handleStepChange} />}
        {step === 4 && <SecondQuestion handleStepChange={handleStepChange} />}
        {step === 5 && <ThirdQuestion handleStepChange={handleStepChange} />}
        {step === 6 && <FourthQuestion handleStepChange={handleStepChange} />}
        {step === 7 && isWinner ? <Win></Win> : <Looser></Looser>}
      </div>
    </>
  );
}

export default App;
