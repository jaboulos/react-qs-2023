import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div>
      <h1>Welcome to problem 1</h1>
      <Link to="/tasks">Go to Tasks</Link>
    </div>
  );
}
