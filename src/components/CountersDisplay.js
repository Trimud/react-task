import React from "react";
import CounterItem from "./CounterItem";

const CountersDisplay = () => {
  return (
    <React.Fragment>
      <CounterItem title="Cats" count="7" />
      <CounterItem title="Dogs" count="5" />
    </React.Fragment>
  );
};

export default CountersDisplay;
