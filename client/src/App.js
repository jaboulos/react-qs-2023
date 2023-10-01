import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { HomePage } from './Homepage';
import { Solution1a } from './mock-questions/question-1/solution-1a/Solution1a';
import { Solution2 } from './mock-questions/question-2/solution-2/Solution2';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/q1' element={<Solution1a />} />
        <Route path='/q2' element={<Solution2 />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
