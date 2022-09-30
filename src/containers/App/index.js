import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Download from '../Download';
import Home from '../Home';

const App = () => {
  return (
    <div>
      <main>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/download' element={<Download />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
