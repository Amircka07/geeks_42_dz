import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const dispatch = useDispatch();
  const num = useSelector((state) => state.nums);
  const Increment = () => {
    dispatch({
      type: "INCREMENT",
    });
  };
  const Decrement = () => {
    dispatch({
      type: "DECREMENT",
    });
  };
  const Increment10 = () => {
    dispatch({
      type: "INCREMENT10",
    });
  };
  const Decrement10 = () => {
    dispatch({
      type: "DECREMENT10",
    });
  };
  const Reset = () => {
    dispatch({
      type: "RESET",
    });
  };

  return (
    <>
      <h1>{num}</h1>
      <button onClick={Increment}>+1</button>
      <button onClick={Decrement}>-1</button>
      <button onClick={Increment10}>+10</button>
      <button onClick={Decrement10}>-10</button>
      <button onClick={Reset}>reset</button>
    </>
  );
}
