// ⚖️ Difference summary
// Syntax	Runs when?	Use case
// onClick={handleClick}	On click	✅ Best // when there is no parameter use this
// onClick={handleClick()}	During render ❌	❌ Avoid // never use this
// onClick={() => handleClick()}	On click	✅ When needed //  when u have parameter use this

import React, { useState } from "react";

function Hooks() {
    
  //eg 1 upadte a value inside the obj and add a property here we changed roidon to dsouza and added city:managlore
  //   const [state, setState] = useState({ name: "roidon", age: 26 });
  //   console.log(state, "stateVal");
  //   function handleClick() {
  //     // setState({ ...state, name: "dsouza" }); //this is also fine next one is better
  //     // setState((prev)=>({...state,name:"dsouza",city:"managlore"}))
  //   }


//   const [users, setUsers] = useState([
//     { id: 1, name: "roidon" },
//     { id: 2, name: "jayanth" },
//     { id: 3, name: "varun" },
//     { id: 4, name: "nitesh" },
//   ]);
//   console.log(users, "users");

//   //eg 2 modefiy a particular key inside a obj
//   function handleClick() {
//     // setUsers((prev) => prev.map((ele) => (ele.id == 2 ? { ...ele, name: "vivek" } : ele)) );
//     setUsers(prev=>prev.map(ele=>ele.id==2 ?{...ele,name:"bibek"}:ele))
//   }

  //eg 3 add a property conditionally is id is odd flag is true else false
//   function handleClick() {
// // setUsers(prev=>prev.map((ele)=>ele.id %2==0 ?{...ele,flag:true}:{...ele,flag:false}))
// // setUsers(prev=>prev.map((ele)=>({...ele,flag:ele.id%2===0?true:false})))
//   }
  return (
    <div>
      {/* <button onClick={handleClick}>click me</button> */}
    </div>
  );
}

export default Hooks;

// Theorey

// Usestate

// useState is used to store and update state in functional components.
// Because state updates in React are async + batched
// "State updates are async because React batches multiple updates for performance.
//  So multiple setState calls using the same value may not reflect intermediate updates unless we use functional updates."

//this is not a way of updating here react batches the updates here it takes initila value in both the cases
//   function handleClick() {
//     setState(state + 1);
//     setState(state + 1);
//   }

//this is the correct way here it stores the prev value
//   function handleClick() {
//     setState((prev) => prev + 1);
//     setState((prev) => prev + 1);
//   }

// setCount(count + 1);
// setCount(10);
// 👉 Output:
// count = 10
// 👉 Because final call overrides everything

// ❓ Q3: Can we store objects/arrays in state?
// ✅ Yes, but must update immutably:
// const [user, setUser] = useState({ name: "John" });
// // ❌ wrong
// user.name = "Jane";
// // ✅ correct
// setUser({ ...user, name: "Jane" });

// useefect
// Used for side effects:
// API calls
// DOM manipulation
// timers
// subscriptions

// 🔥 Common Interview Questions on useEffect
// ❓ Q1: When does useEffect run?
// Dependency	When it runs
// No deps	Every render
// []	Only once (on mount)
// [x]	When x changes

// ❓ Q3: What is cleanup function?
// useEffect(() => {
//   const timer = setInterval(() => {
//     console.log("running");
//   }, 1000);
//   return () => {
//     clearInterval(timer);
//   };
// }, []);
// 👉 Used to:
// clear timers
// remove event listeners
// avoid memory leaks

//when the comp unmounts means when it removed (like user goes to other screen) if u dont write clearInterval
//  code will still run when ur on other page

// ❓ Q4: What happens if dependency is missing?
// 👉 You may get:
// stale data
// bugs
// unexpected behavior

// ❓ Q5: Infinite loop in useEffect?
// useEffect(() => {
//   setCount(count + 1);
// }, [count]);

// 💥 This causes infinite re-render

// ✔ Fix:

// rethink logic
// or use condition

// 🔥 MOST IMPORTANT INTERVIEW SCENARIO
// ❓ Q: Why this prints old value?
// const [count, setCount] = useState(0);
// useEffect(() => {
//   setCount(count + 1);
//   console.log(count);
// }, []);
// 👉 Output: 0 (not 1)
// 👉 Because:

// state update is async
// console.log runs before update completes

// to fix this
// useEffect(() => {
//   console.log("updated:", count);
// }, [count]);


// 🔹 Your question example
// useEffect(() => {
//   console.log("Hello");
// }, []);
// 👉 Runs:  only on mount ✅
// 👉 NOT on every render ❌
// 🔥 Compare with no dependency
// useEffect(() => {
//   console.log("Hello");
// });

// 👉 Runs: on every render 🔁

//mount means only first time
//render means whenver prop or state changes

//array is returned by usestate
//✅ 9. What is cleanup?-C. Runs on unmount or before next effect ✅

// useEffect(() => {
//   console.log("A");
//   return () => console.log("B");
// }, []);
// outPut A then B






// ❓ Q6: Difference between useEffect and useLayoutEffect?

// 👉 useEffect → runs after paint (non-blocking)  its async
// 👉 useLayoutEffect → runs before paint (blocking) its sync

// 🟢 useEffect
// Render → Paint (UI visible) → useEffect runs
// 🔴 useLayoutEffect
// Render → useLayoutEffect runs → Paint (UI visible after)

// 🔍 Example to Understand
// ✅ useEffect
// useEffect(() => {
//   console.log("useEffect");
// });

// 👉 User sees UI first
// 👉 Then this runs

// ✅ useLayoutEffect
// useLayoutEffect(() => {
//   console.log("useLayoutEffect");
// });

// 👉 Runs BEFORE UI is shown
// 👉 UI waits for this to finish

// ❓ Which one is faster?
// 👉 ❌ Wrong: useLayoutEffect
// 👉 ✅ Correct: useEffect

// Why?
// useLayoutEffect blocks rendering → slower UX

// 🧠 When to Use What?
// ✅ Use useEffect (90% cases)
// API calls
// event listeners
// logging
// timers
// 🔴 Use useLayoutEffect (rare)
// DOM measurements
// animations
// avoiding flicker
// reading layout before paint

// useEffect runs after the browser paints, while useLayoutEffect runs synchronously before painting and can block
//  rendering. We use useLayoutEffect for DOM measurements to avoid flicker

// function App() {
//   const [width, setWidth] = useState(0);

//   useLayoutEffect(() => {
//     const w = document.getElementById("box").offsetWidth;
//     setWidth(w);
//   }, []);

//   return <div id="box">{width}</div>;
// }

// ❓ Why useLayoutEffect here?
// 👉 You are:
// reading DOM (offsetWidth)
// updating state immediately
// 👉 If you use useEffect:
// UI shows wrong value first (flicker)
// then updates
// 👉 useLayoutEffect avoids flicker