import React,{useEffect} from "react";

function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
}
function Throttle() {
  useEffect(() => {
    const handleScroll = () => {
      console.log("Throttled scroll event");
    };
    const throttledScroll = throttle(handleScroll, 1000);
    window.addEventListener("scroll", throttledScroll);
    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, []);

  return <div style={{ height: "2000px" }}>Scroll me</div>;
}

export default Throttle;

//without throttling
// function App() {
//   const handleScroll = () => {
//     console.log("Scroll event fired");
//   };

//   window.addEventListener("scroll", handleScroll);

//   return <div style={{ height: "2000px" }}>Scroll me</div>;
// }
