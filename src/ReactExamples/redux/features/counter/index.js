import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  incrementAsync,
  decrement,
  incrementByAmount,
  getCountState,
} from "./counterSlice";

const Counter = () => {
  const count = useSelector(getCountState);
  const { status, value } = count;
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>
        Increment by 2
      </button>
      <button onClick={() => dispatch(incrementAsync(4))}>
        Increment Async
      </button>
      {status === "loading" ? <p>Fetching...</p> : <p>Count is: {value}</p>}
    </div>
  );
};

export default Counter;
