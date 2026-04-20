import React, { useEffect, useState } from "react";

function Debounce() {
  const [input, setInput] = useState("");
  const [debounce, setDebounce] = useState("");
  useEffect(()=>{
    const timer=setTimeout(() => {
        setDebounce(input)
    }, 1000);
    return ()=>clearTimeout(timer)
  },[input])
  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="enter a value"
        />
        <div>input value:{input}</div>
        <div>debounce value:{debounce}</div>
      </div>
    </div>
  );
}

export default Debounce;
