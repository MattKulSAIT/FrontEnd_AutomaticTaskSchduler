import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TestPage from './testPage';
import Login from './pages/users/login/loginPage';
import GeneralResourceView from './pages/users/adminSpecific/resourceGeneral_Admin/resourceGeneral_Admin';
import GeneralHistoryView from './pages/users/adminSpecific/historyGeneral_Admin/historyGeneral_Admin';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
