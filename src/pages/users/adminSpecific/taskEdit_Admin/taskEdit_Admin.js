import React, { useState } from 'react';
import './taskEdit_Admin.css'
import PageHeader from '../../../../components/pageHeader';
//import PageTitle from '../../../../components/Layout_Display/pageTitle';
import TaskEditAdmin from '../../../../components/editViews/taskEditAdmin'

function TaskEditResource() {
    return (
        <div className="TaskEditResource">
            <PageHeader />
            <div className="components">
                <TaskEditAdmin/>
            </div>
        </div>
    );
}
  
export default TaskEditResource;