//Normal code
// import React, { useEffect, useState } from "react";

// function WissenQ() {
//   const arr = [2, 4, 6, 8, 10, 12];
//   const [index, setIndex] = useState(0);
//   useEffect(() => {
//     if (index.length === arr.length) return;
//     const timer = setTimeout(() => {
//     //   setIndex((prev) => prev + 1);//stops after one round
//     //  setIndex((prev) => (prev + 1) % arr.length);       //on loop no stops
//     //always remember use %atrr.length for infinite

//     }, 1000);
//     return () => clearTimeout(timer);
//   }, [index]);
//   return (
//     <div>
//       {/* <div>{index < arr.length ? arr[index] : "Done"}</div> */}
//          {/* <div>{arr[index]}</div> */}
//     </div>
//   );
// }

// export default WissenQ;

//With stop/Pause
import React, { useEffect, useState } from "react";

function WissenQ() {
  const arr = [2, 4, 6, 8, 10, 12];
  const [index, setIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  useEffect(() => {
    if (!isRunning) return; // ⛔ pause

    if (index.length === arr.length) return;
    const timer = setTimeout(() => {
      //   setIndex((prev) => prev + 1);//stops after one round
      setIndex((prev) => (prev + 1) % arr.length); //on loop no stops
      //always remember use %atrr.length for infinite
    }, 1000);
    return () => clearTimeout(timer);
  }, [index, isRunning]);
  return (
    <div>
      {/* <div>{index < arr.length ? arr[index] : "Done"}</div> */}
      <div>{arr[index]}</div>
      <button onClick={() => setIsRunning(true)}>Resume</button>
      <button onClick={() => setIsRunning(false)}>Pause</button>
    </div>
  );
}

export default WissenQ;
