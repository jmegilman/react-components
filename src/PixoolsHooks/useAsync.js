/* Based on examples from Kent C. Dodds */

import { useCallback, useLayoutEffect, useRef, useReducer } from "react";

const STATUS = {
  idle: "idle",
  pending: "pending",
  rejected: "rejected",
  resolved: "resolved",
};
const INIT_STATE = {
  data: null,
  error: null,
  status: STATUS.idle,
};

const asyncReducer = (state, action) => {
  switch (action.type) {
    case STATUS.idle:
      return INIT_STATE;
    case STATUS.pending:
      return { data: null, error: null, status: STATUS.pending };
    case STATUS.resolved:
      return { data: action.data, error: null, status: STATUS.resolved };
    case STATUS.rejected:
      return { data: null, error: action.error, status: STATUS.rejected };
    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
};

const useSafeDispatch = (dispatch) => {
  // this hook is for checking that the consuming component is still mounted before calling dispatch
  // otherwise you could call dispatch after component unmount as it's being called asynchronously
  const mountedRef = useRef(false);

  // useLayoutEffect ensures it's called before browser paint, so asap
  useLayoutEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return useCallback(
    (args) => {
      if (mountedRef.current) {
        dispatch(args);
      }
    },
    [dispatch]
  );
};

const useAsync = (initialState = {}) => {
  const [state, unsafeDispatch] = useReducer(asyncReducer, {
    ...INIT_STATE,
    ...initialState,
  });

  // Not necessary in React v18
  const dispatch = useSafeDispatch(unsafeDispatch);

  const run = useCallback(
    (promise) => {
      dispatch({ type: STATUS.pending });
      promise.then(
        (data) => dispatch({ type: STATUS.resolved, data }),
        (error) => dispatch({ type: STATUS.rejected, error })
      );
    },
    [dispatch]
  );

  return {
    run,
    ...state,
  };
};

export { useAsync, STATUS };
