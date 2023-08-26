import React from "react";

function FourthQuestion({ handleStepChange }) {
  const handleClick = () => {
    handleStepChange("next");
  };
  return <div onClick={handleClick}>ayush 4</div>;
}

export default FourthQuestion;
