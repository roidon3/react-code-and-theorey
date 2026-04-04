import React, { useEffect, useRef, useState } from "react";

function UseRef() {
  //eg :1
  // const inputRef = useRef(null);
  // const handleClick = () => {
  //   inputRef.current.focus();
  //   inputRef.current.style.backgroundColor = "red";
  //   inputRef.current = 100;
  //   console.log(inputRef.current);
  //   console.log("clicked");
  // };
  // console.log(inputRef.current);

  //eg:2
  const [count, setCount] = useState(0);
  const storeRef = useRef(0);
  useEffect(() => {
    storeRef.current=count;
  },[count]);
  const handleClick = () => {};

  return (
    <div>
      {/* eg:1 */}
      {/* <input ref={inputRef} type="text" />
      <button onClick={handleClick}>click me</button> */}
      {/* eg:2 */}
      <div>previous value : {storeRef.current}</div>
      <div>updated value : {count}</div>
      <button onClick={()=>setCount(count+3)}>update value</button>
    </div>
  );
}

export default UseRef;

//useRef is a hook that lets you store a mutable value that does NOT cause re-renders when it changes.
//(A mutable value is simply a value that can be changed after it is created.)
// persists value across renders
// updating it does NOT re-render component
// mainly used for:
// DOM access
// storing previous values
// avoiding re-renders


//this is the exaplme where its stores both the current and the pewvoius value

// import { useState, useEffect, useRef } from "react";
// function Counter() {
//   const [count, setCount] = useState(0);
//   const prevCountRef = useRef(null);
//   useEffect(() => {
//     prevCountRef.current = count;
//   }, [count]);
//   return (
//     <div>
//       <h2>Current: {count}</h2>
//       <h3>Previous: {prevCountRef.current}</h3>

//       <button onClick={() => setCount(count + 1)}>
//         Increment
//       </button>
//     </div>
//   );
// }

// ❓ Q2: When should you NOT use useRef?
// 👉 When UI needs to update
// 👉 Use useState instead

// ❓ Q3: Can useRef replace useState?
// 👉 ❌ NO
// 👉 Because UI won’t update

// ❓ Q4: Is useRef async?
// 👉 ❌ NO
// 👉 It updates immediately

// ❓ Q5: What does useRef return?
// 👉 Object with .current