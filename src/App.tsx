import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Routes } from './Routes/Routes';
import { store } from './store/index';

function App() {
  return (
    <>
      <Router>
        <Provider store={store}>
          <Routes />
        </Provider>
      </Router>
    </>
  );
}

export default App;
