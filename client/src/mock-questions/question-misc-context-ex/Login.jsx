import { useState } from 'react';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <input
        style={{ display: 'block', marginTop: '10px'}}
        type='text'
        placeholder='username...'
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        style={{ display: 'block', marginTop: '10px'}}
        type='text'
        placeholder='password...'
      />
      <button style={{ display: 'block', marginTop: '10px'}} onClick={() => setShowProfile(true)}>
        Login
      </button>
      {showProfile && <h1>{username}</h1>}
    </>
  );
};
