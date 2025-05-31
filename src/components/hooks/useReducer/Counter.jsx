import React, { useId, useReducer, useRef } from "react";
import "./counter.css";
const Counter = () => {
  const initialState = {
    count: 0,
    inc: 2,
    dec: 3,
  };
  const id = useId();
  const val = useRef(0);
  console.log(val);
  const reducer = (state, action) => {
    // if (action.type === "Increment") return state + 1;
    // else return state - 1;
    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + Number(val.current.value) };
      case "DECREMENT":
        return { ...state, count: state.count - Number(val.current.value) };
      case "RESET":
        return { ...state, count: 0 };

      default:
        return { ...state };
    }
  };
  const [currState, dispatch] = useReducer(reducer, initialState);

  return (
    <div
      className={`p-10 flex flex-col justify-center items-center h-lvh bg-amber-300`}
    >
      <h1 className={`text-2xl font-bold`}>Hello useReducer hook</h1>
      <form>
        <label htmlFor={id} className={`mr-1`}>
          I/P Number
        </label>
        <input type="text" id={id} ref={val} className={`border-4 `} />
      </form>
      <p>{currState.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default Counter;
