import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div style={{display: 'flex', flexDirection:"column"}}>
      <h1>Welcome to problem 1</h1>
      <Link to="/q1">Go to Question 1</Link>
      <Link to="/q2">Go to Question 2</Link>
      <Link to='/q3'>Go to Question 3</Link>
    </div>
  );
}
