import { useReducer } from "react";

const ACTION_TYPES = {
  increment: "INCREMENT",
  decrement: "DECREMENT",
};

function exampleReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.increment:
      return {
        ...state,
        count: state.count + action.step,
      };
    case ACTION_TYPES.decrement:
      return {
        ...state,
        count: state.count - action.step,
      };
    default:
      throw new Error(
        `Action type ${action.type} is not valid for exampleReducer`
      );
  }
}

const ExampleUseReducer = ({ initialCount = 0, step = 1 }) => {
  const [state, dispatch] = useReducer(exampleReducer, { count: initialCount });
  return (
    <>
      <button onClick={() => dispatch({ type: ACTION_TYPES.increment, step })}>
        Increment Counter
      </button>
      <button onClick={() => dispatch({ type: ACTION_TYPES.decrement, step })}>
        Decrement Counter
      </button>
      Counter: {state.count}
    </>
  );
};

export default ExampleUseReducer;
