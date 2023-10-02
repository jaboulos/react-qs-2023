import { useState, useContext } from 'react';
import { LoginContext } from '../../Contexts/LoginContext';

export const Login = () => {
  const { setUsername, setShowProfile, username, password, setPassword } = useContext(LoginContext);

  return (
    <>
      <input
        style={{ display: 'block', marginTop: '10px' }}
        type='text'
        placeholder='username...'
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        style={{ display: 'block', marginTop: '10px' }}
        type='text'
        placeholder='password...'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={() => {
          setShowProfile(username && password);
        }}
      >
        LOGIN
      </button>
    </>
  );
};
