import { count } from "console";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFunc, minusFunc, resetFunc } from "../store/sliceCounter";

const CounterApp = () => {
  const dispatch = useDispatch();
  const selector = useSelector((store) => store.counterSlice.value);
  return (
    <div>
      <button onClick={() => dispatch(addFunc())}>Plus</button> <hr />{" "}
      {selector} <hr />
      <button onClick={() => dispatch(minusFunc())}>Minus</button>
      <button onClick={()=> dispatch(resetFunc())} >Reset</button>
    </div>
  );
};

export default CounterApp;
