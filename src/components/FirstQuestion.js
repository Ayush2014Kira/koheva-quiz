import React from "react";

function FirstQuestion({ handleStepChange }) {
  const handleClick = () => {
    handleStepChange("next");
  };
  return <div onClick={handleClick}>ayush 1</div>;
}

export default FirstQuestion;
