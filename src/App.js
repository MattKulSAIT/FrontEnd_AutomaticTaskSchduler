import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/users/login/loginPage';
import ResourceGeneralTaskViewPage from './pages/users/resourceSpecific/taskGeneral_Resource/taskGeneral_Resource';
import ResourceSelectedTaskViewPage from './pages/users/resourceSpecific/taskSelected_Resource/taskSelected_Resource';
import ResourceEditTaskView from './pages/users/resourceSpecific/taskEdit_Resource/taskEdit_Resource';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/taskGeneral_Resource" element={<ResourceGeneralTaskViewPage />} />
        <Route path="/taskSelected_Resource" element={<ResourceSelectedTaskViewPage />} />
        <Route path="/taskEdit_Resource" element={<ResourceEditTaskView />} />
      </Routes>
    </Router>
  );
};

export default App;
