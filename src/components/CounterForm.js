import React, { useState } from "react";

const CounterForm = ({ doAddCounter, doValidate }) => {
  const [counterName, setCounterName] = useState("");

  const handleInputChange = (event) => {
    setCounterName(event.target.value);
  };
  return (
    <p>
      New counter:
      <input value={counterName} type="text" onChange={handleInputChange} />
      <button
        type="button"
        onClick={() => {
          //TODO: refactor to return Error messages from doValidate to render on screen
          if (doValidate(counterName)) {
            doAddCounter(counterName);
          }
        }}
      >
        Add
      </button>
    </p>
  );
};

export default CounterForm;
