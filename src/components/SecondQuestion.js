import React from "react";
import Checkbox from "antd/es/checkbox/Checkbox";
// import "./../assets/css/option.css";
function SecondQuestion({ handleStepChange }) {
  const handleClick = () => {
    setTimeout(() => {
      handleStepChange("next");
    }, 600);
  };
  return (
    <>
      <div className="row">
        <div className="mb-2">
          What is your website’s main goal for your coaching business?
        </div>
        <div className="checkboxdiv">
          <Checkbox value="A" onClick={handleClick}>
            Get more consult/discovery calls
          </Checkbox>
        </div>
        <div className="checkboxdiv">
          <Checkbox onClick={handleClick}>Consistent online purchases</Checkbox>
        </div>
        <div className="checkboxdiv">
          <Checkbox onClick={handleClick}>
            Grow my audience/email list subscribers
          </Checkbox>
        </div>
        <div className="checkboxdiv">
          <Checkbox onClick={handleClick}>
            Showcase & leverage my expertise into media/sponsor opportunities
          </Checkbox>
        </div>
      </div>
    </>
  );
}

export default SecondQuestion;
