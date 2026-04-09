import React, { useState, useRef } from "react";

function StopWatch() {
  const [time, setTime] = useState(0); // seconds
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  function handleStart() {
    if (isRunning) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }
  function handlePause() {
    setIsRunning(false);
    clearTimeout(intervalRef.current);
  }
  function handleReset() {
    setIsRunning(false);
    clearTimeout(intervalRef.current);
    setTime(0);
  }
  return (
    <div>
      <div>
        <h1>{time} sec</h1>

        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default StopWatch;
