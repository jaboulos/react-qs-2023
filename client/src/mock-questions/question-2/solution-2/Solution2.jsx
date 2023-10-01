import React, { useState, useMemo } from 'react';
import { UseMemoExample } from './UseMemoExample';
import { UseCallbackExample } from './UseCallbackExample';
import { useNavigate } from 'react-router-dom';

export const Solution2 = () => {

  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  return (
    <div>
      <button onClick={goBack}>Back</button>
      <h1>useMemo EXAMPLE</h1>
      <UseMemoExample />
      <h1 style={{marginTop: '35px'}}>useCallback EXAMPLE</h1>
      <UseCallbackExample />
    </div>
  )
}