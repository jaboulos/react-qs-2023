import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Solution4a = () => {
  const navigate = useNavigate()
  const goBack = () => {
    navigate('/')
  }
  return (<div>
    <button onClick={goBack}>Back</button>
    <p>Solution4a - using context</p>
  </div>)
}