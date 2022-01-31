import { useEffect } from "react";
import User from "./User";
import { useAsync, STATUS } from "../../PixoolsHooks/useAsync";
import { fetchUser } from "./utils";

const UserSearch = ({ searchTerm }) => {
  const { data, error, status, run } = useAsync();

  useEffect(() => {
    if (!searchTerm || searchTerm.length === 0) {
      return;
    }

    const promise = fetchUser(searchTerm);
    run(promise);
  }, [searchTerm, run]);

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
