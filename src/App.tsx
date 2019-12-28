import React from 'react';

import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import Pages from './pages';
import Store from './store';

import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={new Store()}>
      <Router>
        <Pages />
      </Router>
    </Provider>
  );
};

export default App;
