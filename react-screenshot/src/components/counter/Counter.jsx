import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCounterValue } from "../../store/reducers/selectors/getCounterValue/getCounterValue";
import { decrement, increment } from "../../store/reducers/counterReducer";

export const Counter = () => {
  const value = useSelector(getCounterValue);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">{value}</h1>
      <button type="button" onClick={handleIncrement} data-testid="increment-btn">
        Increment
      </button>
      <button type="button" onClick={handleDecrement} data-testid="decrement-btn">
        Decrement
      </button>
    </div>
  );
};
