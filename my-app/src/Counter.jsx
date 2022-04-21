import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment,reset } from "./Reducer/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div>
      <h3> {`Counter: ${count}`} </h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className="btn btn-success" onClick={handleIncrement}> + </button>
        <button className="btn btn-danger" onClick={handleDecrement}> - </button>
        <button className="btn btn-info" onClick={handleReset}> Reset </button>
      </div>
    </div>
  );
};

export default Counter;
