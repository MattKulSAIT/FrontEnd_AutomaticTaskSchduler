import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './pages/users/login/loginPage';
import TaskEditResource from './pages/users/resourceSpecific/taskEdit_Resource/taskEdit_Resource'


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <TaskEditResource />
);

reportWebVitals();
