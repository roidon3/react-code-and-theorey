import React from "react";
function ChildComp({ progress }) {
  return (
    <div
      className="parent"
      style={{
        width: "100%",
        borderRadius: "10px",
        border: "1px solid black",
        overflow: "hidden",
        margin: "10px 0",
      }}
    >
      <div
        className="child"
        style={{
          backgroundColor: "green",
          color: `${progress}` > 0 ? "white" : "black",
         
          transform:`translateX(${progress-100}%)`,
          textAlign: "right",
        }}
      >
        {progress}%
      </div>
    </div>
  );
}
//  width: `${progress}%`,
//or use translate transform
// transform:`translateX(${progress-100}%)`,
let progressValue = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
function Progress() {
  return (
    <div>
      {/* <ChildComp progress={50}/> */}
      {progressValue.map((value) => (
        <ChildComp key={value} progress={value} />
      ))}
    </div>
  );
}

export default Progress;
