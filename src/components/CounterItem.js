import React from "react";

const CounterItem = ({ title, count }) => {
  return (
    <p>
      {title}: {count} <button>+</button>&nbsp;
      <button>-</button>
    </p>
  );
};

export default CounterItem;
