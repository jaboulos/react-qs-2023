// import React, { useState } from 'react';
// import { useNavigate } from 'react-router';

// import { Login } from './Login';

// import { LoginContext } from '../../Contexts/LoginContext';
// import { Profile } from './Profile';

// export const ContextExample = () => {
//   const [showProfile, setShowProfile] = useState(false);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const navigate = useNavigate();
//   const goBack = () => navigate('/');

//   return (
//     <div>
//       <button onClick={goBack}>Back</button>

//       <LoginContext.Provider
//         value={{ username, setUsername, setShowProfile, password, setPassword }}
//       >
//         {showProfile ? <Profile /> : <Login />}
//       </LoginContext.Provider>
//     </div>
//   );
// };
