import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// WAŻNE!! #absolute import;
import App from 'views/Root';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
