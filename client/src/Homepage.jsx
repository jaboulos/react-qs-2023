import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div>
      <h1>Welcome to problem 1</h1>
      <Link to="/q1">Go to Question 1</Link>
      <Link to="/q2">Go to Question 2</Link>
    </div>
  );
}
