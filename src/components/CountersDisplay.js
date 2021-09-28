import React from "react";
import CounterItem from "./CounterItem";

const CountersDisplay = ({ counters, updateCounters }) => {
  const renderCounters = () => {
    console.log(Object.values(counters));
    return Object.values(counters).map((counter) => {
      return (
        <CounterItem
          key={counter.name}
          itemCounter={counter}
          doUpdateCounter={updateCounters}
        />
      );
    });
  };
  return <React.Fragment>{renderCounters()}</React.Fragment>;
};

export default CountersDisplay;
