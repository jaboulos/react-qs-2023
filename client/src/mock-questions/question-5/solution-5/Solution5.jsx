import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

export const Solution5 = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchString, setSearchString] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const navigate = useNavigate();
  const goBack = () => {
    navigate('/');
  };

  return (
    <div>
      <button onClick={goBack}>Back</button>

      <input
        placeholder='search...'
        onChange={(e) => setSearchString(e.target.value)}
        style={{ display: 'block', marginTop: '15px' }}
      />
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
