import { useEffect, useState } from "react";
import axios from "axios";

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
    <div>
      {users.map((user) => (
        <div key={user.id} data-testid="user-item">
          {user.name}
        </div>
      ))}
    </div>
  );
};
