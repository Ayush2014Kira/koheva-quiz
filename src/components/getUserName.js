import React, { useEffect, useState } from "react";
import { Radio, Select, Space } from "antd";
import logo from "./../assets/images/logo.png";
import "../assets/css/getbyname.css";
function GetUserName({ handleStepChange }) {
  const [selectedItems, setSelectedItems] = useState("");
  const handleChange = (e, l) => {
    console.log("value", e, l);
    setSelectedItems(l.label);
    var s = document.getElementById("start");
    s.focus();
    // setName(l.label);
    // handleStepChange("next");
  };
  const handleClick = () => {
    handleStepChange("next");
  };
  useEffect(() => {
    console.log(selectedItems);
  }, [selectedItems]);
  const options = [
    {
      value: "1",
      label: "Not Identified",
    },
    {
      value: "2",
      label: "Closed",
    },
    {
      value: "3",
      label: "Communicated",
    },
    {
      value: "4",
      label: "Identified",
    },
    {
      value: "5",
      label: "Resolved",
    },
    {
      value: "6",
      label: "Cancelled",
    },
  ];
  return (
    <div className="container main">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div>
        <div class="contact-form">
          <h2>Let's start with your Name:</h2>
          <form action="">
            <p>Your Name:</p>
            {/* <input placeholder="Enter Your Name" type="text" /> */}
            <Select
              showSearch
              style={{
                width: "100%",
              }}
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              onChange={(e, l) => handleChange(e, l)}
              options={options}
            />
            <input
              type="submit"
              value="START"
              id="start"
              onClick={handleClick}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default GetUserName;
