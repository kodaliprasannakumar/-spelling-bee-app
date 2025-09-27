import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SpellingLab from './pages/SpellingLab';
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SpellingLab />} />
        <Route path="/spelling-lab" element={<SpellingLab />} />
      </Routes>
    </Router>
  );
};

export default App;
