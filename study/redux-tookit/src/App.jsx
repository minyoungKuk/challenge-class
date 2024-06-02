import React from "react";
import { useDispatch } from "react-redux";
import Button from "./components/Button";
import Display from "./components/Display";
import { decrement, increment } from "./redux/slices/counter.slice";

const App = () => {
  const incrementByFive = () => {
    const action = increment(5);
    const dispatch = useDispatch(action);
  };

  const decrementByFive = () => {
    const action = decrement(5);
    const dispath = useDispatch(action);
  };

  return (
    <main>
      <Display />
      <Button lable="더하기 5" onclick={incrementByFive} />
      <Button lable="빼기 5" onclick={decrementByFive} />
    </main>
  );
};

export default App;
