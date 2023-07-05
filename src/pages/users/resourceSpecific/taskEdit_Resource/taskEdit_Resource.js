import React, { useState } from 'react';
import './taskEdit_Resource.css'
import PageHeader from '../../../../components/pageHeader';
import PageTitle from '../../../../components/pageTitle';
import TaskEdit from '../../../../components/editViews/taskEdit'

function TaskEditResource() {
    return (
        <div className="TaskEditResource">
            <PageHeader />
            <PageTitle/>
            <div className="components">
                <TaskEdit/>
            </div>
        </div>
    );
}
  
export default TaskEditResource;