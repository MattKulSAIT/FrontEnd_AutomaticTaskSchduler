import React, { useState } from 'react';
import './taskEdit_Admin.css'
import PageHeader from '../../../../components/pageHeader';
import PageTitle from '../../../../components/pageTitle';
import TaskEditAdmin from '../../../../components/editViews/taskEditAdmin'

function TaskEditAdm() {
    return (
        <div className="TaskEditResource">
                <PageHeader/>
                <PageTitle/>
            <div className="components">
                <TaskEditAdmin/>
            </div>
        </div>
    );
}
  
export default TaskEditAdm;