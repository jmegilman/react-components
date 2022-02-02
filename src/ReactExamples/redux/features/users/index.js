import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers } from "./usersSlice";

import AddUserForm from "./AddUserForm";

const filterUser = (user, searchTerm) => {
  if (!searchTerm) {
    return true;
  }

  return user.email.indexOf(searchTerm) !== -1;
};

function Users() {
  const users = useSelector(getUsers);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main>
      <h2>Users</h2>
      <AddUserForm />
      <label htmlFor="searchTerm">Search by email:</label>
      <input
        id="searchTerm"
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {users
          .filter((user) => {
            return filterUser(user, searchTerm);
          })
          .sort((a, b) => {
            const aDate = new Date(a.birthDate);
            const bDate = new Date(b.birthDate);
            if (aDate < bDate) {
              return 1;
            } else if (aDate > bDate) {
              return -1;
            }
            return 0;
          })
          .map((user) => {
            return (
              <li key={user.email}>
                <Link to={`/users/${user?.id}`}>
                  {user?.firstName} {user?.lastName}
                </Link>
                <dl>
                  <div>
                    <dt>Username:</dt>
                    <dd>{user?.username}</dd>
                  </div>
                  <div>
                    <dt>Email:</dt>
                    <dd>{user?.email}</dd>
                  </div>
                  <div>
                    <dt>DOB:</dt>
                    <dd>{user?.birthDate}</dd>
                  </div>
                </dl>
              </li>
            );
          })}
      </ul>
    </main>
  );
}

export default Users;
