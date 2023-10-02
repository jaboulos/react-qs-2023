import React from 'react';
import { Link } from 'react-router-dom';
import './app.css';

export const HomePage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Welcome to problem 1</h1>
      <Link className='links' to='login'>
        Go to login example with context
      </Link>
      <Link className='links' to='/q1'>
        Go to Question 1
      </Link>
      <Link className='links' to='/q2'>
        Go to Question 2
      </Link>
      <Link className='links' to='/q3'>
        Go to Question 3
      </Link>
      <Link className='links' to='/q4a'>
        Go to Question 4a
      </Link>
      <Link className='links' to='/q4b'>
        Go to Question 4b
      </Link>
      <Link className='links' to='/q5'>
        Go to Question 5
      </Link>
    </div>
  );
};
