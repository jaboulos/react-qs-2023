import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Solution4b = () => {
  const navigate = useNavigate()
  const goBack = () => {
    navigate('/')
  }
  return (<div>
    <button onClick={goBack}>Back</button>
    <p>Solution4b - using redux</p>
  </div>)
}