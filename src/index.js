import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import "./Styles/index.css";
import { createRoot } from 'react-dom/client';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);