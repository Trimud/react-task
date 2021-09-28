import React, { useState, useEffect } from "react";
import Counter from "../entities/Counter";

const incrementCounter = (counter) => {
  return new Counter(counter.name, counter.count + 1);
};
const decrementCounter = (counter) => {
  let count = counter.count;
  if (count > 0) {
    count = count - 1;
    return new Counter(counter.name, count);
  }
  return counter;
};

const CounterItem = ({ itemCounter, doUpdateCounter }) => {
  const [counter, setCounter] = useState(itemCounter);

  return (
    <p>
      {counter.name}: {counter.count}&nbsp;
      <button
        onClick={() => {
          setCounter((current) => {
            const newCounter = incrementCounter(current);
            doUpdateCounter(newCounter);
            return newCounter;
          });
        }}
      >
        +
      </button>
      &nbsp;
      <button
        onClick={() => {
          setCounter((current) => {
            const newCounter = decrementCounter(current);
            doUpdateCounter(newCounter);
            return newCounter;
          });
        }}
      >
        -
      </button>
    </p>
  );
};

export default CounterItem;
