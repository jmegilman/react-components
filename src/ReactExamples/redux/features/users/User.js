import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function User() {
  const params = useParams();
  const user = useSelector((state) =>
    state.users.data.find((u) => String(u.id) === String(params.userId))
  );

  return (
    <main>
      <h2>User Details</h2>
      {user ? (
        <div>
          <p>UserId: {user?.id}</p>
          <p>
            {user?.firstName} {user?.lastName}
          </p>
        </div>
      ) : (
        <p>Oops, user not found</p>
      )}
    </main>
  );
}

export default User;
