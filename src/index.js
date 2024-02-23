import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

//Apps file
import App from './App';

//Styles
import './index.css';

//Import Components
import HouseContextProvider from './components/HouseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HouseContextProvider>
    <Router>
      <App />
    </Router>
  </HouseContextProvider>
);
