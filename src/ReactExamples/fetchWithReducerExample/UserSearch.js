// Features
// 1. Handles it's own fetch when searchTerm prop changes
// 2. Uses a reducer for settings status, data and error
// 3. Has an ErrorBoundary for catching errors
// 4. Separates fetch into it's own function with return Promise
// 5. From this a useAsync hook can be created (see ReactExamples/useAsyncExample)

import { useEffect, useReducer } from "react";
import User from "./User";
import { fetchUser } from "./utils";

const STATUS = {
  idle: "idle",
  pending: "pending",
  rejected: "rejected",
  resolved: "resolved",
};

const userSearchReducer = (state, action) => {
  switch (action.type) {
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

const UserSearch = ({ searchTerm }) => {
  const [state, dispatch] = useReducer(userSearchReducer, {
    data: null,
    error: null,
    status: STATUS.idle,
  });

  const { status, error, data } = state;

  useEffect(() => {
    if (searchTerm && searchTerm.length) {
      dispatch({ type: STATUS.pending });
      fetchUser(searchTerm).then(
        (data) => dispatch({ type: STATUS.resolved, data }),
        (error) => dispatch({ type: STATUS.rejected, error })
      );
    }
  }, [searchTerm]);

  if (status === STATUS.idle) {
    return "";
  } else if (status === STATUS.pending) {
    return <div>Loading...</div>;
  } else if (status === STATUS.resolved) {
    return <User data={data} />;
  } else if (status === STATUS.rejected) {
    throw error;
  }

  throw new Error("This should be impossible");
};

export default UserSearch;
