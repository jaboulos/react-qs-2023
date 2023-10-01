import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Solution3 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchString,setSearchString] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        // make api call, set response to state
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const parsedData = await res.json()
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

  return (
    <div>
      <button onClick={goBack}>Back</button>
      <input/>
      {loading ? (
        <p>LOADING...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : data ? (
        <ul>
          {data.map((item) => (
            <li>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>No Data...</p>
      )}
    </div>
  );
};
