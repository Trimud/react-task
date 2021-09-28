import React, { useState, useEffect } from "react";

import CounterForm from "./CounterForm";
import CounterTotal from "./CounterTotal";
import CountersDisplay from "./CountersDisplay";
import Counter from "../entities/Counter";

const CounterContainer = () => {
  const [total, setTotal] = useState(0);
  const [counters, setCounters] = useState({});

  console.log("CounterContainer [RENDER: ] counters: ", counters);

  const addNewCounter = (counterName) => {
    // TODO: Validate for Name does not already exist in Object.keys
    setCounters((current) => {
      return {
        ...current,
        [counterName]: new Counter(counterName, 0),
      };
    });
  };
  const updateCounters = (counter) => {
    setCounters((current) => {
      return {
        ...current,
        [counter.name]: counter,
      };
    });
  };

  const validateCounterName = (name) => {
    // Validate for Empty String
    if (name === "") {
      return false;
    }
    // Validate for Name does not already exist in Object.keys
    if (counters[name]) {
      return false;
    }
    //TODO: Return an object, like ({valid: false, error: "Please enter a name"})
    //TODO: Return an object, like ({valid: false, error: "Name already exists"})
    return true;
  };

  const updateTotal = (counters) => {
    if (counters.length > 0) {
      let newTotal = 0;
      //REFACTOR: Replace Array.forEach() with Array.reduce()
      counters.forEach((counter) => (newTotal += counter.count));
      setTotal(newTotal);
    }
  };
  useEffect(() => {
    updateTotal(Object.values(counters));
  }, [counters]);

  return (
    <React.Fragment>
      <CounterTotal total={total} />
      <CountersDisplay counters={counters} updateCounters={updateCounters} />
      <CounterForm
        doAddCounter={addNewCounter}
        doValidate={validateCounterName}
      />
    </React.Fragment>
  );
};

export default CounterContainer;
