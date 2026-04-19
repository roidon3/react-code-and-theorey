import React, { useMemo, useState } from "react";
const nums = new Array(30000).fill(0).map((item, idx) => {
  return {
    index: idx,
    isMagical: idx == 29999,
  };
});
function UseMemo() {
  const [count, setCount] = useState(0);
  //here in this ex we also have a counter count+ count-
  //if we dont use memo when ever counter inc/dec our exp cal will takes place
  const [numbers, setNumbers] = useState(nums);
  // const magical=numbers?.find((ele)=>ele.isMagical ===true)//expensive calculation
  const magical = useMemo(
    () => numbers?.find((ele) => ele.isMagical === true),
    [numbers],
  );
  console.log(nums);
  return (
    <>
      <div>UseMemo {magical.index}</div>
      <p>The count value is{count}</p>
      <button
        onClick={() => {
          setCount((prev) => count + 1);
          if (count === 5) {
            setNumbers(
              new Array(30000).fill(0).map((item, idx) => {
                return {
                  index: idx,
                  isMagical: idx == 29997,
                };
              }),
            );
          }
        }}
      >
        inc
      </button>
      <button
        onClick={() => {
          setCount((prev) => count - 1);
        }}
      >
        dec
      </button>
    </>
  );
}

export default UseMemo;


// import React, { useState, useMemo } from "react";

// function UseMemo() {
//   const [count, setCount] = useState(0);
//   const [num, setNum] = useState(5);

//   const square = useMemo(() => {
//     console.log("Calculating...");
//     return num * num;
//   }, [num]);

//   return (
//     <div>
//       <h2>Square: {square}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Re-render ({count})
//       </button>

//       <button onClick={() => setNum(num + 1)}>
//         Change Number
//       </button>
//     </div>
//   );
// }