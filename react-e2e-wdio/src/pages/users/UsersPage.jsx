import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const { data: users } = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(users);
    };
    getUsers();
  }, []);

  return (
    <div data-testid="users-page">
      {users.map((user) => (
        <div key={user.id}>
          <Link to={`/users/${user.id}`} data-testid="user-item">
            {user.name}
          </Link>
        </div>
      ))}
    </div>
  );
};
