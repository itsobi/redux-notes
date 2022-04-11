import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions";
import { decrement } from "./actions";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const loggedIn = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => dispatch(increment(2))}
      >
        +
      </button>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      {loggedIn ? <h4>User Information</h4> : null}
    </div>
  );
};

export default App;
