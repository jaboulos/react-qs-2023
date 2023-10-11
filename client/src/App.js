import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { HomePage } from './Homepage';
import { Solution1a } from './mock-questions/question-1/solution-1a/Solution1a';
import { Solution2 } from './mock-questions/question-2/solution-2/Solution2';
import { Solution3 } from './mock-questions/question-3/solution-3/Solution3';
import { Solution4a } from './mock-questions/question-4/solution-4a/Solution4a';
import { Solution4b } from './mock-questions/question-4/solution-4b/Solution4b';
import { Solution5 } from './mock-questions/question-5/solution-5/Solution5';
// import { ContextExample } from './mock-questions/question-misc-context-ex/ContextExample';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/login' element={<ContextExample />} /> */}
        <Route path='/q1' element={<Solution1a />} />
        <Route path='/q2' element={<Solution2 />} />
        <Route path='/q3' element={<Solution3 />} />
        <Route path='/q4a' element={<Solution4a />} />
        <Route path='/q4b' element={<Solution4b />} />
        <Route path='/q5' element={<Solution5 />} />
      </Routes>
    </Router>
  );
};

export default App;
