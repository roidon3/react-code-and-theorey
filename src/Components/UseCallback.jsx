import React, { useCallback, useState } from "react";
import ChilcComUseCallback from "./ChilcComUseCallback";

function UseCallback() {
  const [count, setCount] = useState(0);

  const [adjective, setAdjective] = useState("good");
  //if we dont use useCallback ,when couner + or - happens to the counter the getAdjective fun re renders and child comp also rerenders
  const getAdjective = useCallback(() => {
    return "new value";
  }, []);
  return (
    <div>
      useCallback
      <ChilcComUseCallback adjective={adjective} getAdjective={getAdjective} />
      <div>Value of count is {count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        INC
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        DEC
      </button>
    </div>
  );
}

export default UseCallback;
