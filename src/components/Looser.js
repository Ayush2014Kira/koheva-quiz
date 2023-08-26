import React from "react";

function Looser({ handleStepChange }) {
  const handleClick = () => {
    handleStepChange("next");
  };
  // return <div onClick={handleClick}>ayush 6</div>;
}

export default Looser;
