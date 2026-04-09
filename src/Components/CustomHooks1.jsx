import React, { useState } from "react";
import useCounter from "./useCounter";

function CustomHooks1() {
  const [count, increment, decrement] = useCounter(5);
  return (
    <div>
      {count}
      <button onClick={increment}>inc</button>
      <button onClick={decrement}>dec</button>
    </div>
  );
}

export default CustomHooks1;
