import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

export const Solution5 = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [debounceTime, setDebounceTime] = useState(null)

  // fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setUsers(data);
        setFilteredUsers(data)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // filter data
  useEffect(() => {
    const lowerCaseSearchString = searchString?.toLowerCase()
    const newFilteredUsers = users.filter((user) => user?.name?.toLowerCase().includes(lowerCaseSearchString))
    setFilteredUsers(newFilteredUsers)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchString, users])

  const navigate = useNavigate();
  const goBack = () => {
    navigate('/');
  };

  const handleFilterUsers = (e) => {
    // clear debounce time if exists
    if(debounceTime) {
      clearTimeout(debounceTime)
    }

    // readability
    const value = e?.target?.value

    // call function after 500 ms
    const timeout = setTimeout(() => {
      setSearchString(value)
    }, 300)

    setDebounceTime(timeout)
  }

  return (
    <div>
      <button onClick={goBack}>Back</button>

      <input
        placeholder='search...'
        onChange={(e) => handleFilterUsers(e)}
        style={{ display: 'block', marginTop: '15px' }}
      />
      <ul>
        {filteredUsers.map((filteredUser) => (
          <li key={filteredUser.id}>{filteredUser.name}</li>
        ))}
      </ul>
    </div>
  );
};
