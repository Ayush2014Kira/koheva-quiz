import React from "react";

function ThirdQuestion({ handleStepChange }) {
  const handleClick = () => {
    handleStepChange("next");
  };
  return <div onClick={handleClick}>ayush 3</div>;
}

export default ThirdQuestion;
