import React, { useState } from "react";
import useCounter from "./useCounter";

function CustomHooks() {
  const [count, increment, decrement] = useCounter(0);
  return (
    <div>
      {count}
      <button onClick={increment}>inc</button>
      <button onClick={decrement}>dec</button>
    </div>
  );
}

export default CustomHooks;

//custom hooks is a js function whoose name starts with use
//we can use react hooks inside custom hooks

//why to use custom hooks?
//to remove the duplicate logic in the components and we can extract that logic to custom hooks
