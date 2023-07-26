import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateTask from './pages/customer/ticketCreation/ticketCreation_Customer';
import SentTask from './pages/customer/sentTicket/sentTicket_Customer';
import LoginPage from './pages/users/login/loginPage';
import AdminMenu from './pages/users/adminSpecific/menu_Admin/menu_Admin';
import ResourceMenu from './pages/users/resourceSpecific/menu_Resource/menu_Resource';
import ResourceGeneralTaskViewPage from './pages/users/resourceSpecific/taskGeneral_Resource/taskGeneral_Resource';
import ResourceSelectedTaskViewPage from './pages/users/resourceSpecific/taskSelected_Resource/taskSelected_Resource';
import ResourceEditTaskView from './pages/users/resourceSpecific/taskEdit_Resource/taskEdit_Resource';
import ResourceEditSchedule from './pages/users/resourceSpecific/scheduleEdit_Resource/scheduleEdit_Resource'
import AdminGeneralTaskViewPage from './pages/users/adminSpecific/taskGeneral_Admin/taskGeneral_Admin';
import AdminGeneralResourceViewPage from './pages/users/adminSpecific/resourceGeneral_Admin/resourceGeneral_Admin';
import AdminGeneralHistoryViewPage from './pages/users/adminSpecific/historyGeneral_Admin/historyGeneral_Admin';
import AdminSelectedHistoryViewPage from './pages/users/adminSpecific/historySelected_Admin/historySelected_Admin';
import AdminCreateResourceViewPage from './pages/users/adminSpecific/createResource_Admin/createResource_Admin';
import AdminSelectedTaskViewPage from './pages/users/adminSpecific/taskSelected_Admin/taskSelected_Admin';
import AdminEditTaskViewPage from './pages/users/adminSpecific/taskEdit_Admin/taskEdit_Admin';
import AdminSelectedResourceViewPage from './pages/users/adminSpecific/resourceSelected_Admin/resourceSelected_Admin';
import AdminEditResourceViewPage from './pages/users/adminSpecific/resourceEdit_Admin/resourceEdit_Admin';
import AdminEditAdminPageView from './pages/users/adminSpecific/adminEdit__Admin/adminEdit_Admin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/createTask" element={<CreateTask/>} />
        <Route path="/sentTask" element={<SentTask/>} />
        <Route path="/menu_Admin" element={<AdminMenu/>} />
        <Route path="/menu_Resource" element={<ResourceMenu/>} />
        <Route path="/taskGeneral_Resource" element={<ResourceGeneralTaskViewPage/>} />
        <Route path="/taskSelected_Resource/:id" element={<ResourceSelectedTaskViewPage/>} />
        <Route path="/taskEdit_Resource/:id" element={<ResourceEditTaskView/>} />
        <Route path="/scheduleEdit_Resource/" element={<ResourceEditSchedule/>} />
        <Route path="/taskGeneral_Admin" element={<AdminGeneralTaskViewPage/>} />
        <Route path="/taskSelected_Admin/:id" element={<AdminSelectedTaskViewPage/>} />
        <Route path="/taskEdit_Admin/:id" element={<AdminEditTaskViewPage/>} />
        <Route path="/resourceGeneral_Admin" element={<AdminGeneralResourceViewPage/>} />
        <Route path="/resourceSelected_Admin/:id" element={<AdminSelectedResourceViewPage/>} />
        <Route path="/resourceEdit_Admin/:id" element={<AdminEditResourceViewPage/> } />
        <Route path="/adminEdit_Admin/:id" element={<AdminEditAdminPageView/> } />
        <Route path="/historyGeneral_Admin" element={<AdminGeneralHistoryViewPage/>} />
        <Route path="/historySelected_Admin/:id" element={<AdminSelectedHistoryViewPage/>} />
        <Route path="/newResource_Admin" element={<AdminCreateResourceViewPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
