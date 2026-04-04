// 🔹 What is useReducer?
// useReducer is a React hook used for managing complex state logic.
// 👉 Think of it as an alternative to useState when:
// State has multiple values
// State updates depend on previous state
// You have complex logic (conditions, multiple actions)

// const [state, dispatch] = useReducer(reducer, initialState);
// Key parts:
// state → current state
// dispatch → function to trigger updates
// reducer → function that decides how state changes
//if intialState is 0 then state is also 0 same as useState
//it returns an array containing current state and dispatch function
//dispatch function is used to send actions to reducer,which updates the state based on action type
//reducer function takes current state and action as argument and return new state

import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer } from "react";

function UseReducer() {
  const initialState = { count: 0 };
  function reducer(state, action) {
    switch (action.type) {
      case "inc":
        return { count: state.count + 1 };
      case "dec":
        return { count: state.count > 0 ? state.count - 1 : 0 };
      default:
        return { state };
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {state.count}
      <button
        onClick={() => {
          dispatch({ type: "inc" });
        }}
      >
        Inc
      </button>
      <button
        onClick={() => {
          dispatch({ type: "dec" });
        }}
      >
        Dec
      </button>
    </div>
  );
}

export default UseReducer;
