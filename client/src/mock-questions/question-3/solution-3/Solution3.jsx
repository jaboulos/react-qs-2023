import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './solution3.css';

export const Solution3 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // make api call, set response to state
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const parsedData = await res.json();
        setData(parsedData);
      } catch (error) {
        // set error
        setError(error);
      } finally {
        // set loading
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const navigate = useNavigate();
  const goBack = () => {
    navigate('/');
  };

  const filteredPosts = data.filter((item) =>
    item.title.includes(searchString)
  );

  return (
    <div className='container'>
      <button onClick={goBack}>Back</button>
      <input
        placeholder='search...'
        onChange={(e) => setSearchString(e.target.value)}
      />
      {loading ? (
        <p>LOADING...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : data && filteredPosts.length > 0 ? (
        <ul>
          {filteredPosts.map((item) => (
            <li key={item.id}>
              <p>{item.title}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Data...</p>
      )}
    </div>
  );
};
