import React, { useState } from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  const [value, setValue] = useState(false);

  const setBackColor = () => {
    if (value) {
      return {
        backgroundColor: "green",
      };
    }
  };
  const setColor = () => {
    if (value) {
      return {
        backgroundColor: "greenyellow",
        left: "70%",
        transition: "left 0.3s",
        border: "6px solid grey",
      };
    } else {
      return {
        backgroundColor: "red",
        left: "0",
        transition: "left 0.3s",
        border: "6px solid black",
      };
    }
  };
  const handleClick = () => {
    setValue(!value)
  };

  return (
    <div className="container">
      <div className="toggle-Switch" style={setBackColor()}>
        <div className="switch" style={setColor()}>
          <span
            className="switch-state"
            onClick={handleClick}
            style={{
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            {value ? "ON" : "OFF"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
