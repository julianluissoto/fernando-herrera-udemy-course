import { useState } from "react";

const CounterApp = () => {
  const [state, setState] = useState({
    Counter1: 10,
    Counter2: 20,
    Counter3: 30,
  });
  const { Counter1, Counter2, Counter3 } = state;
  const onAddCounter = () => {
    setState({
      ...state,
      Counter1: state.Counter1 + 1,
    });
  };

  return (
    <>
      <h1>counter app</h1>
      <hr />
      <h2>Counter: {Counter1}</h2>
      <h2>Counter: {Counter2}</h2>
      <h2>Counter: {Counter3}</h2>
      <hr />

      <button className="btn btn-success" onClick={onAddCounter}>
        {" "}
        set counter 1 en +1
      </button>
    </>
  );
};

export default CounterApp;
