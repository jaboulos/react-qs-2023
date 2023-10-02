import React from 'react';
import { useNavigate } from 'react-router';

export const Solution5 = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/')
  }
  return (
    <div>
      <button onClick={goBack}>Back</button>
      <h1>Question 5</h1>
    </div>
  )
}