import axios from 'axios';
import { useEffect, useState } from 'react';

// Define the User type
interface User {
  id: string;
  name: string;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]); // State for storing users

  useEffect(() => {
    // Fetch data from the NestJS backend
    axios.post<User[]>('http://localhost:3000/user')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error posting users:', error));
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
