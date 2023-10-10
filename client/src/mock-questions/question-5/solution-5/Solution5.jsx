import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

export const Solution5 = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchString, setSearchString] = useState([]);
  const [debounceTime, setDebounceTime] = useState(null)

  // fetch data
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

  // filter data
  useEffect(() => {
    const lowerCaseSearchString = searchString.toLowerCase()
    const newFilteredUsers = filteredUsers.filter((user) => user?.name?.toLowerCase() === lowerCaseSearchString)
    setFilteredUsers(newFilteredUsers)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchString, users])

  const navigate = useNavigate();
  const goBack = () => {
    navigate('/');
  };

  const filterUsers = (e) => {
    // clear debounce time if exists
    if(debounceTime) {
      clearTimeout(debounceTime)
    }

    // readability
    const value = e.target.value

    // call function after 500 ms
    const timeout = setTimeout(() => {
      setSearchString(value)
    }, 500)

    console.log('timeout', timeout)
    setDebounceTime(timeout)
  }

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
