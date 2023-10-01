import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { HomePage } from './Homepage';
import { Solution1a } from './mock-questions/question-1/solution-1a/Solution1a';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/tasks' element={<Solution1a />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
