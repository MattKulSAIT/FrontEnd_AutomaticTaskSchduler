import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/users/login/loginPage';
import ResourceGeneralTaskViewPage from './pages/users/resourceSpecific/taskGeneral_Resource/taskGeneral_Resource';
import ResourceSelectedTaskViewPage from './pages/users/resourceSpecific/taskSelected_Resource/taskSelected_Resource';
import ResourceEditTaskView from './pages/users/resourceSpecific/taskEdit_Resource/taskEdit_Resource';
import AdminGeneralTaskViewPage from './pages/users/adminSpecific/taskGeneral_Admin/taskGeneral_Admin';
import AdminGeneralResourceViewPage from './pages/users/adminSpecific/resourceGeneral_Admin/resourceGeneral_Admin';
import AdminGeneralHistoryViewPage from './pages/users/adminSpecific/historyGeneral_Admin/historyGeneral_Admin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/taskGeneral_Resource" element={<ResourceGeneralTaskViewPage />} />
        <Route path="/taskSelected_Resource/:id" element={<ResourceSelectedTaskViewPage />} />
        <Route path="/taskEdit_Resource/:id" element={<ResourceEditTaskView />} />
        <Route path="/taskGeneral_Admin" element={<AdminGeneralTaskViewPage />} />
        <Route path="/resourceGeneral_Admin" element={<AdminGeneralResourceViewPage />} />
        <Route path="/historyGeneral_Admin" element={<AdminGeneralHistoryViewPage />} />
      </Routes>
    </Router>
  );
};

export default App;
