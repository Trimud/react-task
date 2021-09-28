import React from "react";

import CounterForm from "./components/CounterForm";
import CounterTotal from "./components/CounterTotal";
import CountersDisplay from "./components/CountersDisplay";

const CounterContainer = () => {
  return (
    <React.Fragment>
      <CounterTotal />
      <CountersDisplay />
      <CounterForm />
    </React.Fragment>
  );
};

export default CounterContainer;
