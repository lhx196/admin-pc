import React from 'react';
import './App.css';
import { HashRouter as Router } from 'react-router-dom';
import Pages from './pages/';

const App: React.FC = () => {
  return (
    <Router>
      <Pages />
    </Router>
  );
};

export default App;
