import React from "react";

const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <div>{count}</div>
      <div
        onClick={() => {
          increment(1);
        }}
      >
        +
      </div>
      <div
        onClick={() => {
          decrement(1);
        }}
      >
        -
      </div>
    </div>
  );
};

export default Counter;
