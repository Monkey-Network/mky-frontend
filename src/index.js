import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Providers from './Providers'
import {BrowserRouter as Router} from 'react-router-dom';
ReactDOM.render(
  <Providers>
    <Router>
      <App />
    </Router>
  </Providers>,
  document.getElementById('root')
);

